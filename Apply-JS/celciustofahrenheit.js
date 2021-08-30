//  Celcius to Fahrenheit
// °F = (°C × 9/5) + 32
function celciusToFahrenheit(celcius) {
  var fah = (celcius * 9) / 5 + 32;
  return fah;
}

var checkFahrenheit = celciusToFahrenheit(26);
console.log(checkFahrenheit);

//  Fahrenheit to Celcius
function fahrenheitToCelcius(fah) {
  var cel = ((fah - 32) * 5) / 9;
  return cel;
}

var checkCelcius = fahrenheitToCelcius(78.8);
console.log(checkCelcius);
// °C = (°F − 32) x 5/9
