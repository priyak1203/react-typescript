/* ########## GENERICS - GENERATE ARRAY ########## */

function generateStringArray(length: number, value: string): string[] {
  let result: string[] = [];
  result = Array(length).fill(value);
  return result;
}

console.log(generateStringArray(3, 'Hello'));

// Generic Create Array
function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  result = Array(length).fill(value);
  return result;
}

const stringsArray = createArray<string>(3, 'TypeScript');
const numbersArray = createArray<number>(4, 75);

console.log(stringsArray);
console.log(numbersArray);
