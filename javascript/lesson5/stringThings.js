const sampleString = "                Hello, World!           "; // string
// how to get the length of a string

const lengthOfTheString = sampleString.length; // returns the length of the string
const lowerCaseString = sampleString.toLowerCase(); // returns the string in lower case
const upperCaseString = sampleString.toUpperCase(); // returns the string in upper case

// const trimmedString = sampleString.trim(); // returns the string trimmed
// const trimmedAndUpperCase = trimmedString.toUpperCase(); // returns the string trimmed and then in upper case

const trimmedAndThenUpperCase = sampleString.trim().toUpperCase(); // returns the string trimmed and then in upper case

console.log("The original string is: ", sampleString);
console.log(
  "The output of trim() and toUpperCase():  ",
  trimmedAndThenUpperCase
);

// console.log("The length of the string is: ", lengthOfTheString);
// console.log("The string in lower case is: ", lowerCaseString);
// console.log("The string in upper case is: ", upperCaseString);
