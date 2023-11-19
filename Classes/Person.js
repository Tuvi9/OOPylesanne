// Parent class for all
class person {

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
        return `This is ${this.name}, they are ${this.age()} years old. They were born in ${this.year}.`;
    }
}

// Export the person class
module.exports = person;