/* ########## CHALLENGE ########## */

// Your task is to create a function named processData that accepts two parameters:
// The first parameter, input, should be a union type that can be either a string or a number.
// The second parameter, config, should be an object with a reverse property of type boolean,
// by default it "reverse" should be false
// The function should behave as follows:
// If input is of type number, the function should return the square of the number.
// If input is of type string, the function should return the string in uppercase.
// If the reverse property on the config object is true, and input is a string,
// the function should return the reversed string in uppercase.

function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number {
  if (typeof input === 'number') {
    return input * input;
  } else {
    return config.reverse
      ? input.toUpperCase().split('').reverse().join('')
      : input.toUpperCase();
  }
}

console.log(processData(12));
console.log(processData('Hello'));
console.log(processData('Hello', { reverse: true }));
console.log(processData('TypeScript', { reverse: true }));
