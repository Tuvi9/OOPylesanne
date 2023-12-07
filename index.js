const express = require('express')
const app = express()

const course = require('./routes/course')
const school = require('./routes/school')
const student = require('./routes/student')

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });

app.use('/student', student)
app.use('/course', course)
app.use('/school', school)

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})