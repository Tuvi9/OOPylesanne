// Creates a student class that extends the person class
const Person = require('./Person');

// Create a student class that extends the person class
class Student extends Person {
    constructor(name){
        super();
        this.name = name
        this.id = null;
        this.grades = [];
    }

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    getGrades() {
        return this.grades;
    }

    setGrades(grade) {
        this.grades.push(grade)
    }

    // If the student has no grades, return -1, otherwise return the average of all the grades
    getAverageGrade() {
        if (this.grades.length === 0) {
            return -1
        } else {
            return this.grades.reduce((a, b) => a + b, 0) / this.grades.length
        }
    }
}

// Export the student class
module.exports = Student;