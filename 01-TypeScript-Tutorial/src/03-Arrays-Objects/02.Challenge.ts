/* ########## CHALLENGE ########## */

// Create an array temperatures of type number[] and assign it some values.
// Then, try to add a string value to it.
// Create an array colors of type string[] and assign it some values.
// Then, try to add a boolean value to it.
// Create an array mixedArray of type (number | string)[] and assign it some values.
// Then, try to add a boolean value to it.

// 1. Temperatures
let temperatures: number[] = [25, 28, 30];
// temperatures.push('hot'); // This will result in a TypeScript error
temperatures[3] = 35;
// temperatures[4] = 'humid'; // This will result in a TypeScript error
console.log(temperatures);

// 2. Colors
let colors: string[] = ['red', 'yellow'];
// colors.push(false); // This will result in a TypeScript error
console.log(colors);

// 3. Mixed Array
let mixedList: (string | number)[] = [1, 'two', 'three', 4];
// mixedList.push(true); // This will result in a TypeScript error
console.log(mixedList);
