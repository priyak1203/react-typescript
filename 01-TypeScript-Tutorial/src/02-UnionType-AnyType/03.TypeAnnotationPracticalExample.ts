/* ########## PRACTICAL APPLICATION OF TYPE ANNOTATION ########## */

const books = ['1984', 'Brave New World', 'Fahrenheit 451'];

let foundBook: string | undefined;

for (let book of books) {
  if (book === '1984') {
    foundBook = book;
    foundBook = foundBook.toUpperCase();
    break;
  }
}

// Case 1
// if not assigned type and its "any" by default
// then we can re assign different values to it
// foundBook = 10;

// Case 2
// if foundBook is assigned type string
// there is not guarantee outside of the loop that it can be string
// console.log(foundBook); // throws an error

// Case 3
// Assigning union type string | undefined ,
// typescript adds optional chaining
// which means foundBook can either be string or it can possibly be undefined
// this doesnt trigger runtime error if foundBook is not a string
console.log(foundBook?.length);
