/* ########## CHALLENGE ########## */
// Create a variable orderStatus of type 'processing' | 'shipped' | 'delivered'
// and assign it the value 'processing'.
// Then, try to assign it the values 'shipped' and 'delivered'.

// Create a variable discount of type number | string and assign it the value 20.
// Then, try to assign it the value '20%'.

// 1. Order Status
let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing';
orderStatus = 'shipped';
orderStatus = 'delivered';
// orderStatus = 'cancelled' // This will result in a TypeScript error
console.log(orderStatus);

// 2. Discount
let discount: number | string = 20;
discount = '20%';
// discount = true // This will result in a TypeScript error
console.log(discount);
