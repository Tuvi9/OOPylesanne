// Creates a school class that extends the course class
const course = require('./Course');

class school extends course {
    constructor(name) {
        super(name);
    }
}

module.exports = school;