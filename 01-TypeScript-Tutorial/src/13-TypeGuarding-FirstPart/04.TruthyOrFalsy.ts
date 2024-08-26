/* ########## TYPE GUARDS PART 1 ########## */

// "Truthy" /"Falsy" guard

function printLength(str: string | null | undefined) {
  if (str) {
    // In thie block, TypeScript know that `str` is a string
    // because `null` and `undefined` are falsy values
    console.log(str.length);
  } else {
    console.log('No string provided');
  }
}

printLength('Hello TypeScript'); // outputs: 16
printLength(null); // outputs : No string provided
printLength(undefined); /* ########## TYPE GUARDS PART 1 ########## */
