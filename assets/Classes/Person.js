// Parent class for all
const Person = class {
    constructor(name) {
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
        return new Date().getFullYear() - this.year;
    }

    // Returns the person's name, age and year of birth
    description() {
        return `This is a person with the name ${this.name} and age ${this.age()}`
    }
}

// Export the person class
exports.Person = Person