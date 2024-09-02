/* ########## GENERICS - MULTIPLE TYPES ########## */

function pair<T, U>(param1: T, param2: U): [T, U] {
  return [param1, param2];
}

let result = pair<number, string>(123, 'World');
console.log(result);
