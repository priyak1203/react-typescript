/* ########## UNION TYPES AS FUNCTION PARAMETERS ########## */

/* ########## CHALLENGE ########## */
// Your task is to create a function named processInput that accepts a parameter of a union type string | number.
// The function should behave as follows:
// If the input is of type number, the function should multiply the number by 2 and log the result to the console.
// If the input is of type string, the function should convert the string to uppercase and log the result to the console.

// Type Guards
function processInput(input: string | number) {
  if (typeof input === 'number') {
    console.log(input * 2);
  } else {
    console.log(input.toUpperCase());
  }
}

processInput(10);
processInput('hello world');
