/* ########## TYPE GUARDS PART 2 ########## */

// type predicate - type `never` gotcha

type Student = {
  name: string;
  study: () => void;
};

type User = {
  name: string;
  login: () => void;
};

type Person = Student | User;

const randomPerson = (): Person => {
  return Math.random() > 0.5
    ? { name: 'ankit', study: () => console.log('Studying') }
    : {
        name: 'raghav',
        login: () => console.log('Logging in'),
      };
};

// const person = randomPerson();

// // Case 1
// // hardcoding the person to be student
// const person: Person = {
//   name: 'Suresh',
//   study: () => console.log(`${person.name} is studying`),
// };

// Case 2
// hardcoding the person to be user
const person: Person = {
  name: 'Ajinkya',
  //   study: () => console.log(`${person.name} is studying`),
  login: () => console.log(`${person.name} is logging in...`),
};
console.log(person);

function isStudent(person: Person): person is Student {
  // return 'study' in person
  return (person as Student).study !== undefined;
}

// Usage
if (isStudent(person)) {
  person.study();
  // If a person is hardcoded as User, this will not result in TypeScript Error
  // This will be bypassed and go to else block
} else {
  // Case 1
  // If a person is hardcoded as Student, this will result in TypeScript Error
  // there is no way for `person` to be User, it has to be never if not Student
  // person.login();  // This will result in TypeScript Error
  console.log(person);

  // Case 2
  person.login();
}
