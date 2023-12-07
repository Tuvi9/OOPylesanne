const exampleData = require('../Example/data')

const getCourseByName = ((req, res) => {
    exampleData.school.getCourses().forEach(course => {
        if (course.name === req.params.name) {
            res.json(course)
        }
    })
})

module.exports = courseController = {
    getCourseByName
}