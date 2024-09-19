import { useEffect, useState } from 'react';

const url = 'https://www.course-api.com/react-tours-project';

const Component = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Failed to fetch tours`);
        }

        const rawData = await response.json();
        console.log(rawData);
        setIsError(null);
      } catch (error) {
        console.log(error);
        const message =
          error instanceof Error ? error.message : `there was an error...`;
        setIsError(message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (isError) {
    return <h3>Error: {isError}</h3>;
  }

  return (
    <div>
      <h2>Fetch Data</h2>
    </div>
  );
};

export default Component;
