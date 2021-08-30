const phones = [
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
let cheapest = phones[0];
for (const phone of phones) {
  if (phone.price < cheapest.price) {
    cheapest = phone;
  }
}
console.log(cheapest);
