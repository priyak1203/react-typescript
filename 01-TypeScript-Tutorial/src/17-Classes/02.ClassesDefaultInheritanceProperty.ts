/* ########## CLASSES INSTANCE PROPERTY / DEFAULT PROPERTY ########## */

class Book {
  title: string;
  author: string;
  // checkout: boolean;
  // checkout: boolean = false;
  checkout = false;
  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
    // this.checkout = false;
  }
}

const deepWork = new Book('Deep Work', 'Cal NewPort');
console.log(deepWork);
deepWork.checkout = true;
console.log(deepWork);
// deepWork.checkout = 'something else';  // This will result in TypeScript Error
