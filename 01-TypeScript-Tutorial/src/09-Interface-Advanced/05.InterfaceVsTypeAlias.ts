/* ########## INTERFACE VS TYPE ALIAS  ########## */

// A type alias is a way to give a name to a type. It can represent primitive type, union types,
// intersection types, tuples and any other types.
// Once defined, the alias can be used anywhere in place of the actual type.

type Person = {
  name: string;
  age: number;
};

let ankit: Person = { name: 'Ankit', age: 35 };

// An interface is a way to define a contract for a certain structure of an object.

interface NewPerson {
  name: string;
  age: number;
}

let rohan: NewPerson = {
  name: 'Rohan',
  age: 40,
};

// Key Differences

// Type alises can represent primitive types, union types, intersection types, tuples etc.,
// while interfaces are primarily used to represent the shape of an object.

// Type alias for a primitive type
type Score = number;
type NumberOrString = number | string;

// Type alias for literal types
type Direction = 'up' | 'down' | 'left' | 'right';

// Using the type aliases
let gameScore: Score = 100;
let move: Direction = 'up';

// Interfaces can be mergerd using declaration merging. If you define an interface with the same
// name more than once, TypeScript will merge their definitions.

// Interfaces can be implemented by classes, while type aliases cannot.

interface AnotherPerson {
  name: string;
  greet(): void;
}

class Employee implements AnotherPerson {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

let sneha = new Employee('Sneha');
sneha.greet();

// Type aliases can use computed properties, while interfaces cannot.

const propName = 'age';
type Animal = {
  [propName]: number;
};

let tiger: Animal = { [propName]: 5 };
