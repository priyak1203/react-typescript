/* ########## CHALLENGE ########## */

// Define the Person interface Start by defining a Person interface with a name property of type string.
// Define the DogOwner interface Next, define a DogOwner interface that extends Person and adds a dogName property of type string.
// Define the Manager interface Then, define a Manager interface that extends Person and adds two methods: managePeople and delegateTasks. Both methods should have a return type of void.
// Define the getEmployee function Now, define a function called getEmployee that returns a Person,
// DogOwner, or Manager. Inside this function, generate a random number and use it to decide
// which type of object to return. If the number is less than 0.33, return a Person.
// If it's less than 0.66, return a DogOwner. Otherwise, return a Manager.
// Finally, create a variable called employee that can be a Person, DogOwner, or Manager, and assign
// it the return value of getEmployee. Then, log employee to the console.

interface Person {
  name: string;
}

interface DogOwner extends Person {
  dogName: string;
}

interface Manager extends Person {
  managePeople(): void;
  delegateTasks(): void;
}

function getEmployee(): Person | DogOwner | Manager {
  const random = Math.random();
  if (random < 0.33) {
    return {
      name: 'John',
    };
  } else if (random < 0.66) {
    return {
      name: 'David',
      dogName: 'Tom',
    };
  } else {
    return {
      name: 'Bob',
      managePeople() {
        console.log('Managing People');
      },
      delegateTasks() {
        console.log('Delegate Tasks');
      },
    };
  }
}

let employee: Person | DogOwner | Manager = getEmployee();
console.log(employee);
