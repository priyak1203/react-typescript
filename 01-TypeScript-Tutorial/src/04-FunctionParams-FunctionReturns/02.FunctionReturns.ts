/* ########## FUNCTION RETURNS ########## */
function calculateDiscount(price: number): number {
  const hasDiscount = true;

  if (hasDiscount) {
    return price;
    // return 'Discount Applied';
  }

  return price * 0.5;
}

const finalPrice = calculateDiscount(200);
console.log(finalPrice);
