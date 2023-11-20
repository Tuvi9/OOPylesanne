const course = require('./Classes/Course');
const student = require('./Classes/Student');

// Create a new student
const student1 = new student();
const course1 = new course();

// Sets name of student
student1.setName('Kriit');

// Sets ID of student
student1.setId(50604292787)

// Add grades to the student
student1.addStudentGrade([5, 4, 5, 4])
// Returns grades without avreging them
student1.getGrades()

// Takes student1 name and average grade and adds it to the course
course1.addCourse(student1.name, student1.addAverageGrade())

// Prints description of student
console.log(course1.getCourse());
