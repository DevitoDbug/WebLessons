const day = 3;

// if (day === 1) {
//   console.log("That is definately monday");
// } else if (day === 2) {
//   console.log("That is definately tuesday");
// } else if (day === 3) {
//   console.log("That is definately wednesday");
// } else {
//   console.log("Weekend is probably near by ");
// }

switch (day) {
  case 1:
    console.log("That is definately monday");
    break;
  case 2:
    console.log("That is definately tuesday");
    break;
  case 3:
    console.log("That is definately wednesday");
    break;
  default:
    console.log("Weekend is probably near by");
    break;
}

const student1 = 10;

// if (student1 >= 18) {
//   console.log("You are an adult");
// } else if (student1 >= 10) {
//   console.log("You are a teenager");
// } else if (student1 >= 5) {
//   console.log("You are a child");
// } else {
//   console.log("You are a baby");
// }

switch (
  true //true              //false
) {
  case student1 >= 18: // is (true) equal to (student1 >= 18)
    console.log("You are an adult");
    break;
  case student1 >= 10:
    console.log("You are a teenager");
    break;
  case student1 >= 5:
    console.log("You are a child");
    break;
  default:
    console.log("You are a baby");
    break;
}
