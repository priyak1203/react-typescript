/* ########## INTERFACE METHODS MORE OPTIONS ########## */

interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  printAuthor(): void;
  printTitle(message: string): string;
  printSomething: (someValue: number) => number;
  printGenre(): string;
}

const deepWork: Book = {
  isbn: 111,
  title: 'Deep Work',
  author: 'Cal Newport',
  genre: 'self-help',
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },

  // first option - traditional function
  //   printSomething: function (someValue) {
  //     return someValue;
  //   },

  // second option - arrow function
  printSomething: (someValue) => {
    // "this" gotcha - arrow function captures the global "this"
    console.log(deepWork.title);
    return someValue;
  },

  //   // third option
  //   printSomething(value) {
  //     return value;
  //   },

  // alternative
  //   printAuthor: () => {
  //     console.log(deepWork.author);
  //   },

  printGenre: () => {
    if (!deepWork.genre) {
      return `missing genre`;
    } else {
      return deepWork.genre;
    }
  },
};

console.log(deepWork.printSomething(33));
console.log(deepWork.printGenre());
deepWork.printAuthor();
