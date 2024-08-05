/* ########## ARRAY OF OBJECTS ########## */

let book = { title: 'book', cost: 10 };
let pen = { title: 'pen', cost: 5 };
let notebook = { title: 'notebook' };

// let items: { title: string; cost: number }[] = [book, pen, notebook]; // This will result in a TypeScript error
let items: { title: string; cost: number }[] = [book, pen];
console.log(items);

// Optional Properties
let newItems: { title: string; cost?: number }[] = [book, pen, notebook];
console.log(newItems);

newItems[0].title = 'text book';
console.log(newItems);

// ReadOnly Properties
let listItems: { readonly title: string; cost?: number }[] = [
  book,
  pen,
  notebook,
];
// listItems[1].title = 'new pen'; // This will result in a TypeScript error
console.log(listItems);
