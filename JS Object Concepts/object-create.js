// using object literal
const student = { name: "Fazley Rabby", job: "Student" };

// constructor
const person = new Object();
console.log(person);

const human = Object.create(student);
console.log(human.job);

class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const people = new People("Ami", 21);
console.log(people);

function Manush(name) {
  this.name = name;
}

const man = new Manush("a");

console.log(man);
