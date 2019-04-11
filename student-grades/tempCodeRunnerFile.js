const studentOneGrades = [90, 86, 100, 85];
const studentTwoGrades = [65, 81, 96, 100];
const studentThreeGrades = [79, 94, 85, 95];

const studentGrades = [
  studentOneGrades,
  studentTwoGrades,
  studentThreeGrades,
];

// What did student three get on the first exam?
console.log(studentGrades[2][0]);

// What did student two get on the third exam?
console.log(studentGrades[1][2]);

// What did student one get on the last exam?
const numGrades = studentGrades[0].length;
console.log(studentGrades[0][numGrades - 1]);

// What is student 2's average?
console.log(studentGrades[1].reduce((acc, curr) => acc + curr, 0) / numGrades);

// Create a new array of all third exam grades
const thirdExamGrades = studentGrades.map(student => student[2]);
console.log(thirdExamGrades);

// What was the average grade on exam 1?
console.log(studentGrades.reduce((acc, curr) => acc + curr[0], 0) / studentGrades.length);

// What was the worst score on exam 2?
console.log(Math.min(...studentGrades.map(student => student[1])));

// What is the aggregate average test score?
let gradeSum = 0;
let studentCount = 0;

studentGrades.forEach((student) => {
  student.forEach((grade) => {
    gradeSum += grade;
    studentCount += 1;
  });
});

console.log(gradeSum / studentCount);
