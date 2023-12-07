const exampleData = require('../Example/data')

const getStudentByName = ((req, res) => {
    exampleData.school.getStudents().forEach(student => {
        if (student.name === req.params.name) {
            res.json({
                ...student,
                age: student.age()
             })
        }     
    })  
})

const getStudentGrades = ((req, res) => {
    exampleData.school.getStudents().forEach(student => {
        if (student.name === req.params.name) {
            res.json(student.getGrades())
        }
    })
})

module.exports = studentController = {
    getStudentByName,
    getStudentGrades
}