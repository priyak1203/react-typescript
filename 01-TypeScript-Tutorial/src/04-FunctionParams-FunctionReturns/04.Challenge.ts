/* ########## CHALLENGE ########## */

// Create a new array of names.
// Write a new function that checks if a name is in your array.
// This function should take a name as a parameter and return a boolean.
// Use this function to check if various names are in your array and log the results.

const names: string[] = ['david', 'john', 'rohit', 'nisha', 'priya'];

function isNameInList(name: string): boolean {
  return names.includes(name);
}

console.log(isNameInList('rohit'));
console.log(isNameInList('priya'));
console.log(isNameInList('munna'));

let nameToCheck: string = 'peter';

if (isNameInList(nameToCheck)) {
  console.log(`${nameToCheck} is in the list.`);
} else {
  console.log(`${nameToCheck} is not in the list.`);
}
