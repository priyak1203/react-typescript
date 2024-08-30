/* ########## TYPE GUARDS PART 2 ########## */

// type predicate

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

const person = randomPerson();
console.log(person);

// Approach 1
// function isStudent(person: Person): person is Student {
//   return 'study' in person;
// }

// Approach 2
function isStudent(person: Person): person is Student {
  // return 'study' in person
  return (person as Student).study !== undefined;
}

// Usage
if (isStudent(person)) {
  person.study();
} else {
  person.login();
}
