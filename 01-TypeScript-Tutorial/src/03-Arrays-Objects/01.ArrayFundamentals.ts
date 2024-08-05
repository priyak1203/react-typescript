/* ########## ARRAY FUNDAMENTALS ########## */

let prices: number[] = [12, 20, 34, 58, 45];
// prices.push('hello'); // not allowed
console.log(prices);

let fruits: string[] = ['apple', 'strawberry', 'orange'];
// fruits.push(20); // not allowed
console.log(fruits);

let randomValues: [] = []; // This will always be an empty array
// randomValues.push('20'); // not allowed
// randomValues.push('hello'); // not allowed
console.log(randomValues);

// TypeScript infers the type any
// let emptyValues = [];
// console.log({ emptyValues });
// emptyValues.push(25);
// console.log({ emptyValues });
// emptyValues.push('hello world');
// console.log(emptyValues);

// TypeScript infers the type string
let names = ['john', 'peter', 'paul'];
console.log(names);

// TypeScript infers the type union string | number
let values = ['twenty', 'thirty', 45];
console.log(values);

// Explicitly declaring an array of type union
let mixedList: (string | number)[] = ['john', 'peter', 25, 'anna'];
mixedList.push('marie');
mixedList.push(28);
// mixedList.push(false)  // not allowed
console.log(mixedList);
