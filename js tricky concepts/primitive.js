/* 
Data types
 1. primitive data types
 ... primitive data types has single value
. number
. string
. boolean
. undefined
. null
. symbol

 2. non-primitive
 . object
*/

let a = "hello";
let b = a;
// console.log(a, b);
a = "gello";
// console.log(a, b);

const x = { job: "web developer" };
const y = x;
console.log(x, y);
// x.job = 'front end developer';
y.job = "front end developer";
console.log(x, y);
