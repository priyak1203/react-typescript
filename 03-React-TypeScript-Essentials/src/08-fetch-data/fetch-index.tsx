import { useEffect, useState } from 'react';
import { type Tour, tourSchema } from './types';

const url = 'https://www.course-api.com/react-tours-project';

const Component = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);
  const [tours, setTours] = useState<Tour[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Failed to fetch data`);
        }

        const rawData: Tour[] = await response.json();

        const result = tourSchema.array().safeParse(rawData);

        if (!result.success) {
          throw new Error(`Failed to parse data`);
        }

        setTours(result.data);
        setIsError(null);
      } catch (error) {
        console.log(error);
        const errorMessage =
          error instanceof Error ? error.message : 'there was an error';

        setIsError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <h3>Loading... </h3>;
  }

  if (isError) {
    return <h3>Error: {isError}</h3>;
  }

  return (
    <div>
      <h2>Tours</h2>
      {tours.map((tour) => {
        return (
          <p key={tour.id} className="mb-1">
            {tour.name}
          </p>
        );
      })}
    </div>
  );
};

export default Component;
