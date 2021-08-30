// class Support {
//   name;
//   designation = "Support Web Dev";
//   address = "BD";

//   startSession() {
//     console.log(this.name, "start a support session");
//   }
//   constructor({ name, address }) {
//     this.name = name;
//     this.address = address;
//   }
// }

// const aamir = new Support({ name: "Fazley", address: "gulshan" });
// // console.log(aamir);
// aamir.startSession();
// // console.log(aamir);
const nums = [1, 2, 3, 4, 5];
let output = nums.filter((n) => n % 2);
console.log(output);
