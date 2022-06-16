const findTheOldest = function(people) {
    arrayOfAges = [];
    //make variables for for loop.
    let oldAge = 0;
    let oldest;
    for (x in people) {
        let age = 0;
        //if they are not dead, get age from current date.
        if (isNaN(people[x].yearOfDeath)) {
            age = (new Date().getFullYear())-people[x].yearOfBirth;
        } else {
        //if  dead, get their age from birth and death year.
            age = people[x].yearOfDeath-people[x].yearOfBirth;
        }
        //if current older than previous, replace, otherwise keep. 
        //This makes sure to get the oldest after all are checked.
        if (age>oldAge) {
            oldest = x;
            oldAge = age;
        } else {
            continue;
        }
        
    }
    //return the oldest person found.
    return people[oldest];
};

// Do not edit below this line
module.exports = findTheOldest;
