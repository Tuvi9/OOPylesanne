// Parent class for all
class person {

    constructor(name) {
        this.name = name;
    }
    
    setName(name) {
        this.name = name;
    }
    
    getName() {
        return this.name;
    }

    // Sets the year of birth
    setDateOfBirth(year) {
        this.year = year;
    }

    // Returns the year of birth
    getDateOfBirth() {
        return this.year;
    }

    // Calculates the age of the person (Current year - year of birth)
    age() {
        return (new Date().getFullYear() - this.year);
    }

    // Returns the person's name, age and year of birth
    description() {
        return `This is ${this.name}, they are ${this.age()} years old. They were born in ${this.year}, Their ID is ${this.id} so go ahead and steal it! Also their average grade is ${this.addAverageGrade()} so not the smartest. Oh and this is their report card ${this.getGrades()}`;
    }
}

// Export the person class
module.exports = person;