/* ########## ANY TYPE ########## */

let notSure: any = 10;
notSure = 'may be a string';
notSure = false;
console.log(notSure);

let random;
// By default it is  type any,
// as its not assigned any value, typescript has no clue to infer the type
random = 'hello world';
random = 2546;
console.log(random);
