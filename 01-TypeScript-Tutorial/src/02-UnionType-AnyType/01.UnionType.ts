/* ########## UNION TYPE ########## */

let tax: number | string = 100;
tax = 10;
tax = '$10';

console.log(tax);

// literal value type

let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = 'success';
requestStatus = 'error';
// requestStatus = 'random' // not allowed

console.log(requestStatus);
