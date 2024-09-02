/* ########## GENERICS - TYPE CONSTRAINTS  ########## */

// type constraint on the generic type T, generic type can be either strign  or number

function processValue<T extends string | number>(value: T): T {
  console.log(value);
  return value;
}

processValue('hello');
processValue(23);
// processValue(false); // This results in TypeScript Error
