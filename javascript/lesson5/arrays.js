const studentMarks = [90, 80, 20, 60, 10];

//Remove students who have marks lower than 50 from the list
const newStudentMarks = studentMarks.filter((mark) => mark >= 50);

//The function takes in a list(array)
// Remove the values that are less than 50
function marksEvaluator(marks) {
  const newList = [];
  const numberOfStudents = studentMarks.length;

  for (let i = 0; i < numberOfStudents; i++) {
    if (marks[i] >= 50) {
      newList.push(marks[i]);
    }
  }
  return newList;
}

console.log(
  "The new list of students(using the filter()) is: ",
  newStudentMarks
);
console.log(
  "The new list of students(using the our custom function) is: ",
  marksEvaluator(studentMarks)
);
