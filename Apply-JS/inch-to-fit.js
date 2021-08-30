function inchTofeet(inchs) {
  var feet = inchs / 12;
  return feet;
}

var groundFeet = inchTofeet(2);
console.log(groundFeet);
