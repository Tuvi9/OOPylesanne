const exampleData = require('../Example/data')

const getSchoolByName = ((req, res) => {
    if (req.params.name === exampleData.school.name) {
        res.json(exampleData.school)
    }
})

const getSchoolStudents = ((req, res) => {
    if (req.params.name === exampleData.school.name) {
        res.json(exampleData.school.getStudents())
    }
})

const getSchoolCourses = ((req, res) => {
    if (req.params.name === exampleData.school.name) {
        res.json(exampleData.school.getCourses())
    }
})

module.exports = schoolController = {
    getSchoolByName,
    getSchoolStudents,
    getSchoolCourses
}