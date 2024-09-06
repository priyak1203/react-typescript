/* ########## CLASSES READONLY MODIFIER ########## */

class Book {
  readonly title: string;
  author: string;
  checkout: boolean = false;
  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
}

const deepWork = new Book('Deep Work', 'Cal Newport');
console.log(deepWork);
console.log(deepWork.title);
// deepWork.title = 'Something else'; // This will result in TypeScript Error
