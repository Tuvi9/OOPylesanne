// Creates a school class that extends the course class
const Student = require('./Student')
const Course = require('./Course');

class School {
    constructor(name) {
        this.name = name
        this.students = [];
        this.courses = [];
    }


    getStudents() {
        return this.students;
    }

    getCourses() {
        return this.courses;
    }

    addCourse(course) {
        if(course instanceof Course && !this.courses.includes(course)) {
            this.courses.push(course)
        }
    }

    // If X is 7.yr or over then they are a student.
    addStudent(student) {
        if(student instanceof Student && !this.students.includes(student)) {
            if(student.age() >= 7) {
                this.students.push(student);
                student.setId(this.students.length)
            }
        }
    }

    // Assign course the ID and Grade of the student and Assign student the Grade they got
    addStudentGrade(student, course, grade) {
        if(this.students.includes(student) && this.courses.includes(course)) {
            course.setGrades([student.getId(), grade])
            student.setGrades(grade)
        }
    }

    getStudentsOrderedByAverageGrade() {
        return this.students.sort((a, b) => b.getAverageGrade() - a.getAverageGrade())
    }
}

module.exports = School;