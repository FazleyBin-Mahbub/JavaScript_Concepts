// using spread operator with ES6
// spreading an array and add new value from a new array
// use ... to spread operator
var poorCountry = ["Bangladesh", "Srilanka"];

// ... poorCountry works for stor poorCountry array value into the richCountry......
var richCountry = [...poorCountry, "Russia", "China", "America"];

console.log(richCountry);

// কোনো একটি অ্যারে এর ভ্যালু গুলোকে বের করে আনতে স্প্রেড অপারেটর ব্যবহৃত হয় ।

const max = Math.max(23, 21, 46);
console.log(max);

const numbers = [21, 45, 21, 53];

// find the maximum value from an array using spread operator
const max = Math.max(...numbers);
console.log(max);
const numbers = [45, 12, 36, 84];


