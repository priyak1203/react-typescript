/* ########## TYPE UNKNOWN ########## */

let unknownValue: unknown;

unknownValue = 'hello world';
unknownValue = [1, 2, 3];
unknownValue = 48.32356;

// unknownValue.toFixed() // This will result in a TypeScript Error

if (typeof unknownValue === 'number') {
  unknownValue.toFixed(2);
}

// try-catch example

function runSomeCode() {
  const random = Math.random();

  if (random < 0.5) {
    throw new Error('there was an error...');
  } else {
    throw 'some error';
  }
}

try {
  runSomeCode();
} catch (error) {
  // error is unknown by default
  // console.log(error.message); // This will result in TypeScript Error

  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log(error);
  }
}
