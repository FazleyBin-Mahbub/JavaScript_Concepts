function findFact(num) {
  let factorial = 1;
  for (let index = 1; index <= num; index++) {
    factorial = factorial * index;
  }
  return factorial;
}

var fact = findFact(4);

console.log(fact);
