const text = "Than why you are lying";

function reverseString(str) {
  var reverse = "";
  for (var letter of str) {
    reverse = letter + reverse;
  }
  return reverse;
}

var result = reverseString(text);

console.log(result);
