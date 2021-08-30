var names = ["ami", "tmi", "ami"];

function removeDuplicate(names) {
  var unique = [];
  for (const element of names) {
    if (unique.indexOf(element) == -1) {
      unique.push(element);
    }
  }
  return unique;
}

var uniqueNames = removeDuplicate(names);

console.log(uniqueNames);
