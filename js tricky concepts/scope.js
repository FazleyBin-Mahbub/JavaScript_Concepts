const favNum = 27;

function add(first, second) {
  // console.log(mood); // hoisting
  const result = first + second;

  if (result > 9) {
    let mood = "happy";
    mood = "cranky";
  }
  // console.log(mood);
  return result;
}
const sum = add(11, 35);
// console.log(mood);

for (let i = 0; i < 10; i++) {}
// console.log(i);

function patroChai(age, earning) {
  console.log(age);
  console.log(earning);
  let trueAge = age + 7;
  function canMarry(expense) {
    const remaining = earning - expense;
    if (remaining > 1000) {
      return true;
    } else {
      return false;
    }
  }
}
