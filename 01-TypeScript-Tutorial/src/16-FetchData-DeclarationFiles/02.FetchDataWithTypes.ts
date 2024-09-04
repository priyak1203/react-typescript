/* ########## FETCH DATA WITH TYPES ########## */

// Setting up type and provide corrent return type
const url = 'https://www.course-api.com/react-tours-project';

// Defining the type for the data we are fetching
// Tour type
type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

async function fetchData(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: Tour[] = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    const errorMsg =
      error instanceof Error ? error.message : 'there was an error...';
    console.log(errorMsg);
    return [];
  }
}

const tours = await fetchData(url);
tours.map((tour) => {
  console.log(tour.name);
});
