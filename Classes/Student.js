// Creates a student class that extends the person class
const person = require('./Person');

// Create a student class that extends the person class
class student extends person {
    constructor(name){
        super(name);
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

    // For each grade in the inputted list of grades, add it to the student's list of grades
    addStudentGrade(grades) {
        grades.forEach((grade) => {
            this.grades.push(grade);
        })
    }
    // If the student has no grades, return -1, otherwise return the average of all the grades
    addAverageGrade() {
        if (this.grades.length === 0) {
        return -1
        } else {
            return (this.grades.reduce((a, b) => a + b, 0) / this.grades.length)
        }
    }
}

// Export the student class
module.exports = student;