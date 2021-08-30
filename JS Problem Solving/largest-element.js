// Largest Number in an array

function findLargest(numbers) {
  let largest = numbers[i];
  for (var i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}

var largestNumber = findLargest([45, 23, 45, 2, 34]);
console.log(largestNumber);
