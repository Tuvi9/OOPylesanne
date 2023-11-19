const student = require('./Classes/Student');
// Create a new student
const student1 = new student();

// Sets name of student
student1.setName('Kriit');

// Sets ID of student
student1.setId(50604292787)

// Add grades to the student
student1.addStudentGrade([5, 4, 5, 3])

// Prints description of student
console.log(student1.description());