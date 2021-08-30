const products = [
  "Dell hardcore i29 200GB laptop",
  "iphone 1TB camera flashlight Phone",
  "yellow laptop with black camera",
  "Dell 1X59 Lenovo commercial yoga laptop",
  "LG supernova laptop Dell",
  "HTC low price Phone",
  "Dell purple color phone with Laptop",
];

const search = "Dell";

const output = [];
for (const product of products) {
  // indexOf
  // if (product.toLowerCase().indexOf(search.toLowerCase()) != -1) {
  //   output.push(product);
  // }

  // includes
  // if (product.toLowerCase().includes(search.toLowerCase())) {
  //   output.push(product);
  // }

  // startsWith

  if (product.toLowerCase().startsWith(search.toLowerCase())) {
    output.push(product);
  }
}

console.log(output);
