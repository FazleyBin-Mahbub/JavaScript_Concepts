// find the smallest number

/* using condition

var num1 = 34;
var num2 = 32;
var num3 = 45;

if (num1 < num2 && num1 < num3) {
  console.log(`${num1} is Small`);
} else if (num2 < num3 && num2 < num1) {
  console.log(`${num2} is Small`);
} else {
  console.log(`${num3} is Small`);
}
 */

/*  using Math Operation

var num1 = 34;
var num2 = 32;
var num3 = 45;

var small = Math.min(num1, num2, num3);
console.log(small); 

*/

 /* Using function

function findSmallest(num1, num2, num3) {
  if (num1 < num2 && num1 < num3) {
    return `${num1} is Small`;
  } else if (num2 < num3 && num2 < num1) {
    return `${num2} is Small`;
  } else {
    return `${num3} is Small`;
  }
}

var small = findSmallest(34, 12, 67);
console.log(small);

*/
