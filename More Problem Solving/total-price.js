const products = [
  {
    name: "Samsung S20",
    price: 95000,
    camera: 30,
    storage: 12,
    quantity: 1,
  },
  {
    name: "Samsung S10",
    price: 55000,
    camera: 30,
    storage: 12,
    quantity: 3,
  },
  {
    name: "Samsung S7",
    price: 45000,
    camera: 30,
    storage: 12,
    quantity: 4,
  },
];

let totalPrice = 0;

for (const product of products) {
  const productPrice = product.price * product.quantity;
  totalPrice = totalPrice + productPrice;
}
console.log(totalPrice);
