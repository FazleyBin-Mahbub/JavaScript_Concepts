const numbers = [21, 13, 13, 5, 21, 5, 24, 5, 1];

// find the big numbers greater than 20 using filter from an array
const bigNumbers = numbers.filter((number) => number > 20);
// find the big numbers less than 10 using filter from an array

const smallNumbers = numbers.filter((num) => num < 10);
// console.log(bigNumbers);
// console.log(smallNumbers);

const products = [
  { name: "water bottle", price: 50, color: "yellow" },
  { name: "mobile phone", price: 15000, color: "black" },
  { name: "smart watch", price: 3000, color: "black" },
  { name: "sticky note", price: 30, color: "pink" },
  { name: "water glass", price: 3, color: "white" },
];

// find the product price less greater than 100 using filter from an array object
const expensiveProduct = products.filter((product) => product.price > 100);

// console.log(expensiveProduct);

// find the black product color using filter from an array object
const black = products.filter((product) => product.color == "black");

// console.log(black);

/* find the black product color using find from an array object

Note that: find just return the first element of an array  */

const white = products.find((product) => product.color == "black");
console.log(white);
