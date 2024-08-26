/* ########## TYPE GUARDS PART 1 ########## */

// "instanceof" type guard

// Error object example
try {
  // some code that may throw an error
  throw new Error('This is an error');
  // throw 'some error';
} catch (error) {
  // error is unknown by default
  // console.log(error.message); // This will result in TypeScript Error
  if (error instanceof Error) {
    console.log(`Caught and Error object: ${error.message}`);
  } else {
    console.log(`Caught an unknown error`);
  }
}

// Date or string example

function checkInput(input: Date | string): string {
  if (input instanceof Date) {
    return input.getFullYear().toString();
  }
  return input;
}

const year = checkInput(new Date());
const dob = checkInput(new Date('12-03-1986'));
console.log(year);
console.log(dob);
const random = checkInput('2020-05-05');
console.log(random);
