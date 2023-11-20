// Creates a course class that extends the student class
const student = require('./Student');

class course extends student {
    constructor(name) {
        super(name);
        this.courses = [];
    }

    // returns the array of courses
    getCourse() {
        return this.courses;
    }

    // pushes studen1 name and average grade to the course
    addCourse(name, grade) {
        this.courses.push({name: name, grade: grade});
    }
}

module.exports = course;