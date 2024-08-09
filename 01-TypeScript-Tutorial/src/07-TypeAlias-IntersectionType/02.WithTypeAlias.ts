/* ########## TYPE ALIAS ########## */

// With Type Alias

type User = {
  id: number;
  name: string;
  isActive: boolean;
};

const john: User = {
  id: 1,
  name: 'John',
  isActive: true,
};

const susan: User = {
  id: 2,
  name: 'Susan',
  isActive: false,
};

function createUser(user: User): User {
  console.log(`Hello there, ${user.name.toUpperCase()}!!!`);
  return user;
}

createUser(john);
createUser(susan);
