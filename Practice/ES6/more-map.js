// return the number of each element from an array
const friend = ["murad", "bashar", "foysal", "hasina"];

const fLength = friend.map((f) => f.length);

console.log(fLength);

const products = [
  { name: "water bottle", price: 50, color: "yellow" },
  { name: "mobile phone", price: 15000, color: "black" },
  { name: "smart watch", price: 3000, color: "black" },
  { name: "sticky note", price: 30, color: "pink" },
  { name: "water glass", price: 3, color: "white" },
];

// const productsName = products.map((product) => product.name);

products.forEach((product) => console.log(product));
// console.log(productsName);
