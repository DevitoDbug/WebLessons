// logical AND "&&" => and , both
// logical OR || => either, at least
// logical NOT ! =>  not, inverse

// const student1 = 51;
// const student2 = 90;

// // If either of the two students has gotten marks above 50 award the class
// if (student1 > 50 || student2 > 50) {
//   //   console.log("Award the class ");
// }

// // We are only going to award the class if all the students(2) have marks above 50
// // both
// if (student1 > 50 && student2 > 50) {
//   console.log("Both of the students have reached the pass marks");
// } else {
//   console.log(" ONE or BOTH of the students failed to reach the pass marks");
// }

// const studentPassed = false; // assignment
// const inverse = !studentPassed;
// console.log(!inverse);

// How to evaluate AND
// - Only returns true if both sides is true
// else returns false

// How to evaluate the OR
// - Returns true when at least one of the sides evaluates to true

const student1 = "90";
const student2 = 90;

if (student1 === student2) {
  // Type checking
  console.log("The two student age is equal");
} else {
  console.log("The two values are not equal");
}

if (student1 !== student2) {
  // student 1 and student 2 are not equal
  console.log("The two students are not equal in age");
}
