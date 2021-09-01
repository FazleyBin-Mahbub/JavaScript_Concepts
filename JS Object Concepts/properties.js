const bottle = {
  color: "yellow",
  hold: "water",
  price: 50,
  isClean: true,
};

//object.keys getting the all properties names
const keys = Object.keys(bottle);

// console.log(keys);

// object.values getting the all properties values
const values = Object.values(bottle);
// console.log(values);

// object.entries getting the all properties values and names
const entities = Object.entries(bottle);

// console.log(entities);

// object.seal protect from delete a data
Object.seal(bottle);
// delete any object data

delete bottle.isClean;
console.log(bottle);
