class Course {
    constructor(name) {
        this.name = name;
        this.grades = [];
    }

    // returns the array of courses
    getGrades() {
        return this.grades;
    }

    getAverageGrade() {
        if (this.grades.length === 0) {
            return -1
        } else {
            return (this.grades.reduce((a, b) => a + b[1], 0) / this.grades.length)
        }
    }

    setGrades(grades) {
        this.grades.push(grades)
    }
}

module.exports = Course;