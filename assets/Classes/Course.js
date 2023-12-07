const Course = class {
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

    description() {
        return `This is a course with the name ${this.name}`
    }
}

exports.Course = Course