/* ########## FETCH DATA BASIC SETUP ########## */

// Fetch data basic setup and issue with type any
const url = 'https://www.course-api.com/react-tours-project';

async function fetchData(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    const errorMsg =
      error instanceof Error ? error.message : 'there was an error...';
    console.log(errorMsg);
    return [];
  }
}

const tours = await fetchData(url);
console.log(tours);

tours.map((tour: any) => {
  console.log(tour.name);
});
