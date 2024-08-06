/* ########## ANY EXAMPLE ########## */
function addThree(number: any) {
  let anotherNumber: number = 3;
  return number + anotherNumber;
}

const result = addThree(3);
const someValue = result;
console.log(result);
console.log(someValue);

// This will result in run time error
// someValue.myMethod();
