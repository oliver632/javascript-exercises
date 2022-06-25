const findTheOldest = function(people) {

    return people.reduce((oldest, current) => {
        //get age of current person
        let currentAge = (!(current.yearOfDeath) 
        ? (new Date().getFullYear())
        : current.yearOfDeath)-current.yearOfBirth;

        //get age of oldest person
        let oldestAge = (!(oldest.yearOfDeath) 
        ? (new Date().getFullYear())
        : oldest.yearOfDeath)-oldest.yearOfBirth;

        //return new oldest
        return oldestAge < currentAge ? current : oldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
