/* ########## INTERFACE FUNDAMENTALS ########## */

interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre: string;
}

const deepWork: Book = {
  isbn: 123,
  title: 'deep work',
  author: 'Cal Newport',
  genre: 'self-help',
};

// deepWork.isbn = 245 // This will result in a TypeScript Error
deepWork.title = 'Deep Work';
