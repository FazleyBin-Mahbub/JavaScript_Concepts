// js destruction

const fish = {
  id: 58,
  name: "hilsha",
  price: 9000,

  phone: "01712124561",

  address: "chandpur",
  dress: "silver",

};

// destructing a variable from an object


const { phone, dress, id, address } = fish;
console.log(phone);

const company = {
  name: "GP",
  ceo: { id: 1, name: "ajmol", food: "fuchka" },
  web: {
    work: "website development",
    employee: 22,
    framework: "react",
    tech: {
      first: "html",
      second: "css",
      third: "js",
    },
  },
};

const { name, food } = company.ceo;

console.log(food);
