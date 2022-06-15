const findTheOldest = function(people) {
    arrayOfAges = [];
    let oldAge = 0;
    let oldest;
    for (x in people) {
        let age = 0;
        if (isNaN(people[x].yearOfDeath)) {
            age = (new Date().getFullYear())-people[x].yearOfBirth;
        } else {
            age = people[x].yearOfDeath-people[x].yearOfBirth;
        }
        if (age>oldAge) {
            oldest = x;
            oldAge = age;
        } else {
            continue;
        }
        
    }
    return people[oldest];
};
//console.log(new Date().getFullYear());
const peeps = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1950,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

  console.log(findTheOldest(peeps));
// Do not edit below this line
module.exports = findTheOldest;
