/* ########## OPTIONAL PARAMETERS ########## */

// Normal Function
// function calculatePrice(price: number, discount: number): number {
//   return price - discount;
// }

// Optional Parameter
function calculatePrice(price: number, discount?: number): number {
  return price - (discount || 0);
}

const priceAfterDiscount = calculatePrice(100, 20);
console.log(priceAfterDiscount);

const priceWithoutDiscount = calculatePrice(75);
console.log(priceWithoutDiscount);
