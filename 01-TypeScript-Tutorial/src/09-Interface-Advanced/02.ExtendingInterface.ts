/* ########## EXTEND THE INTERFACE ########## */

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

// Extending the interface
interface Employee extends Person {
  employeeId: number;
}

const employee: Employee = {
  name: 'Jane',
  age: 28,
  employeeId: 111,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age} and EmployeeId: ${this.employeeId}`;
  },
};

console.log(employee.getDetails());

interface Manager extends Person, DogOwner {
  managePeople(): void;
}

const manager: Manager = {
  name: 'Bob',
  age: 35,
  dogName: 'Rex',
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
  getDogDetails() {
    return `DogName: ${this.dogName}`;
  },
  managePeople() {
    console.log('Managing the people');
  },
};

console.log(manager.getDetails());
console.log(manager.getDogDetails());
manager.managePeople();
