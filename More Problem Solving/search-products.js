const products = [
  {
    name: "Samsung S20",
    price: 95000,
    camera: 30,
    storage: 12,
  },
  {
    name: "Samsung S10",
    price: 55000,
    camera: 30,
    storage: 12,
  },
  {
    name: "Samsung S7",
    price: 45000,
    camera: 30,
    storage: 12,
  },
];

function searchProducts(products, searchText) {
  const mathced = [];
  for (const product of products) {
    const name = product.name;
    if (name.indexOf(searchText) != -1) {
      mathced.push(name);
    }
  }
  return mathced;
}
var result = searchProducts(products, "Samsung");

console.log(result);
