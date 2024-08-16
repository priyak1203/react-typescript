export function sayHello(name: string): void {
  console.log(`Hello, ${name}`);
}

export let person = 'Susan';

export type Student = {
  name: string;
  age: number;
};

const newStudent: Student = {
  name: 'Peter',
  age: 30,
};

export default newStudent;
