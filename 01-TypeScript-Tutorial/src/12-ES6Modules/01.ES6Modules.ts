import newStudent, { person, sayHello, type Student } from './actions';

/* ########## ES6 MODULES ########## */

sayHello('TypeScript');
console.log(newStudent);
console.log(person);
sayHello(person);

const anotherStudent: Student = {
  name: 'Bob',
  age: 20,
};

console.log(anotherStudent);
