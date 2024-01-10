const findTheOldest = function(people) {
    const oldest = people.sort((a, b) => {
        const firstperson = a.yearOfDeath - b.yearOfBirth;
        const nextperson = a.yearOfDeath - b.yearOfBirth;
        return firstperson > nextperson ? 1 : -1;
    })

    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
