function stopWatch() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}

let clock1 = stopWatch();
// console.log(clock1());

// console.log(clock1());

const bank = (owner) => {
  balance = 0;
  return {
    deposit: (amount) => {
      balance += amount;
      return balance;
    },
    withdraw: (amount) => {
      balance -= amount;
      return balance;
    },
  };
};

const myBank = bank("Fazley");
console.log(myBank.deposit(100));
console.log(myBank.deposit(300));
console.log(myBank.balance);
console.log(myBank.deposit(300));
console.log(myBank.withdraw(200));
console.log(myBank.withdraw(100));
