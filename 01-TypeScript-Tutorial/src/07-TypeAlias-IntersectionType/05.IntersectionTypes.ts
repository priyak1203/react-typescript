/* ########## INTERSECTION TYPES ########## */

type Book = { id: number; name: string; price: number };
type DiscountedBook = Book & { discount: number };

const book1: Book = {
  id: 1,
  name: 'Atomic Habits',
  price: 25,
};

const book2: Book = {
  id: 2,
  name: 'Mindset',
  price: 14,
};

const discountedBook: DiscountedBook = {
  id: 3,
  name: 'Eat that frog',
  price: 30,
  discount: 0.15,
};
