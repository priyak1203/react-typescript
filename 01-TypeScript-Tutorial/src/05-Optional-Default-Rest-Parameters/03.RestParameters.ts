/* ########## REST PARAMETERS ########## */

function sum(message: string, ...numbers: number[]): string {
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled);

  const total = numbers.reduce((prev, current) => {
    return prev + current;
  }, 0);

  return `${message}${total}`;
}

const result = sum('The total is : ', 1, 2, 3, 4, 5, 6);
console.log(result);
