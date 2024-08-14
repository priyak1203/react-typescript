/* ########## TUPLES ########## */

let person: [string, number] = ['david', 25];
console.log(person);

let date: [number, number, number] = [19, 12, 2012];
console.log(date);

function getPerson(): [string, number] {
  return ['Mark', 35];
}

let randomPerson = getPerson();
console.log(randomPerson[0]);
console.log(randomPerson[1]);

let susan: [string, number?] = ['susan'];

// gotcha
let name: readonly [string, string] = ['John', 'Doe'];
console.log(name);
// name.push('Tim'); // This will result in TypeScript Error
console.log(name); //  ['John', 'Doe', 'Tim'] - without readonly
// name.push('zzzz'); // This will result in TypeScript Error
// name.push('zzzz'); // This will result in TypeScript Error
console.log(name); // ['John', 'Doe', 'Tim', 'zzzz', 'zzzz'] - without readonly
