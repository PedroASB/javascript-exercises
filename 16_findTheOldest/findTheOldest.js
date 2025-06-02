const findTheOldest = function(array) {
    let currentYear = (new Date()).getFullYear();
    let oldest, greatestAge = 0;
    array.forEach((person) => {
        let age = (person.yearOfDeath || currentYear) - person.yearOfBirth;
        if (age > greatestAge) {
            oldest = person;
            greatestAge = age;
        }
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
