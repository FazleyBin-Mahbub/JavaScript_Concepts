/* 
1. variable value not assigned
2. function but didn't write return 
3. just wrote return but didn't return anything
4. parameter that isn't passed
5. property that doesn't exist in an object
6. accessing array element out of range
7. accessing deleted array element
8. explicitly set value to undefined
*/

let first;

// console.log(first);

function second(x, y) {
  const sum = x + y;
}

console.log(second(3, 4));
