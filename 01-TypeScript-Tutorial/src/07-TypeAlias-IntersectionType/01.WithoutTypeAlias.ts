/* ########## TYPE ALIAS ########## */

// Without Type Alias

const john: { id: number; name: string; isActive: boolean } = {
  id: 1,
  name: 'John',
  isActive: true,
};

const amy: { id: number; name: string; isActive: boolean } = {
  id: 2,
  name: 'Amy',
  isActive: false,
};

function createUser(user: { id: number; name: string; isActive: boolean }): {
  id: number;
  name: string;
  isActive: boolean;
} {
  console.log(`Hello there, ${user.name.toUpperCase()}!!!`);
  return user;
}

createUser(john);
createUser(amy);
