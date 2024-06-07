// const luckyNumber = 10;

// let valueGuessed;

// valueGuessed = window.prompt("Guess a number between 1 and 100 ");
// //while loop
// while (valueGuessed != luckyNumber) {
//   valueGuessed = window.prompt("Your guess is wrong, please try again ");
// // }

// // User guesses the right number
// if (luckyNumber == valueGuessed) {
//   alert("Your guess is correct!!!! ");
// }

const studentName = "david";

function sumFunction1(a, b) {
  return a + b;
}
const sumFunction2 = function (a, b) {
  return a + b;
};

const sumFunction3 = (a, b) => {
  return a + b;
};

const result1 = sumFunction1(10, 30); // 40
const result2 = sumFunction2(10, 30); // 40
const result3 = sumFunction3(10, 30);
console.log(result1, result2, result3);
