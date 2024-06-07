// while loop
// for loop
// do while loop *

// while (condition) {}

// print numbers from one to 10
// let checker = 0;
// while (checker < 10) {
//   console.log(checker + 1); // 0 1 ... 8 9
//   //   checker = checker + 1;
//   checker++; // 1 2 9 10
// }

// for loop
// declaration and assignment
// condition
// ++ and --
// for (let checker = 10; checker > 0; checker--) {
//   console.log(checker);
// }

// let value = 0;

// do {
//   value++;
//   console.log(value);
// } while (value < 10);

// *
// * *
// * * *
// * * * *

for (let i = 0; i < 4; i++) {
  // rows
  let rowStars = "";
  for (let j = 0; j < i + 1; j++) {
    // collect all the stars for a single row
    rowStars += "* ";
  }
  console.log(rowStars);
}
