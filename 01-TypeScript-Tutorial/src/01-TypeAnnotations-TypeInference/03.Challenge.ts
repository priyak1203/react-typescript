/* ########## CHALLENGE ########## */

// Create a variable of type string and try to invoke a string method on it.
// Create a variable of type number and try to perform a mathematical operation on it.
// Create a variable of type boolean and try to perform a logical operation on it.
// Try to assign a value of a different type to each of these variables and observe the TypeScript compiler's response.
// You can use type annotation or inference

// 1.String
let greeting: string = 'Hello World';
greeting = greeting.toUpperCase();
console.log(greeting);

// 2.Number
let age: number = 35;
age = age + 3;
console.log(age);

// 3.Boolean
let isAdult: boolean = age >= 18;
isAdult = !isAdult;
console.log(isAdult);

// 4.Assigning different types
// Uncommenting any of these will result in a TypeScript error
// greeting = 10;
// age = 'thirty';
// isAdult = 'yes';
