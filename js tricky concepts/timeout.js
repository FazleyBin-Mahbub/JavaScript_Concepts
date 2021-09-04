function doSomething() {
  console.log("I am doing Javascript");
}

console.log("First Person");
console.log("Second Person");
// doSomething();
// calling function and set time out
// setTimeout(doSomething, 5000);
setTimeout(() => {
  doSomething;
}, 5000);
console.log("Third Person");
console.log("Fourth Person");
