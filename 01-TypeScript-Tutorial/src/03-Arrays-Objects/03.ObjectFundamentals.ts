/* ########## OBJECT FUNDAMENTALS ########## */

let car: { brand: string; year: number } = { brand: 'Toyota', year: 2012 };
car.brand = 'Ford';
// car.color = 'White'; // This will result in a TypeScript error
console.log(car);

// let car1: { brand: string; year: number } = { brand: 'Audi', year: 2020, color:'white' }; // This will result in a TypeScript error
let car1: { brand: string; year: number } = { brand: 'Audi', year: 2020 };
console.log(car1);

// let car2: { brand: string; year: number } = { brand: 'BMW' }; // This will result in a TypeScript error
let car2: { brand: string; year: number } = { brand: 'BMW', year: 2014 };
console.log(car2);
