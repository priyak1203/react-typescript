/* ########## CHALLENGE ########## */

// Create an object bike of type { brand: string, year: number } and assign it some values.
// Then, try to assign a string to the year property.
// Create an object laptop of type { brand: string, year: number }
// and try to assign an object with missing year property to it.
// Create an array products of type { title: string, price?: number }[] and assign it some values.
// Then, try to add an object with a price property of type string to it.

// 1. Bike
let bike: { brand: string; year: number } = { brand: 'yamaha', year: 2022 };
// bike.year = 'latest'; // This will result in a TypeScript error
console.log(bike);

// 2. Laptop
// let laptop: { brand: string; year: number } = { brand: 'Dell' }; // This will result in a TypeScript error
let laptop: { brand: string; year: number } = { brand: 'Dell', year: 2022 };
console.log(laptop);

// 3. Products
let product1 = { title: 'Shirt', price: 200 };
let product2 = { title: 'Dress' };

let products: { title: string; price?: number }[] = [product1, product2];
products.push({ title: 'Shoes' });
// products.push({ title: 'Tie', price: 'expensive' }); // This will result in a TypeScript error
console.log(products);
