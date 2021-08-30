function evenOdd(num) {
  if (num % 2 == 1) {
    return `${num} is Even`;
  } else {
    return `${num} is Odd`;
  }
}

const number = evenOdd(7);
console.log(number);
