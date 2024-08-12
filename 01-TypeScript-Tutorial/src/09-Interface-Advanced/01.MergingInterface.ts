/* ########## MERGING THE INTERFACE ########## */

interface Person {
  name: string;
  getDetails(): string;
}

interface DogOwner {
  dogName: string;
  getDogDetails(): string;
}

// Merging the interface or reopening the interface
interface Person {
  age: number;
}

const person: Person = {
  name: 'David',
  age: 35,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
};

console.log(person.getDetails());
