const findTheOldest = function (arr) {
  const oldest = arr.sort(function (a, b) {
    if (a.yearOfDeath === undefined) {
      let year = new Date().getFullYear();
      a.yearOfDeath = year;
    } else if (b.yearOfDeath === undefined) {
      let year = new Date().getFullYear();
      b.yearOfDeath = year;
    }
    const lastPerson = a.yearOfDeath - a.yearOfBirth;
    const nextPerson = b.yearOfDeath - b.yearOfBirth;
    return lastPerson > nextPerson ? -1 : 1;
  });

  return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
