const findTheOldest = function(people) {
	let oldest = people[0];
	let currentYear = new Date().getFullYear();
	for (let i = 1; i < people.length; i++) {
		let person = people[i];

		let deathYear = person.yearOfDeath || currentYear;
		let age = deathYear - person.yearOfBirth;

		let oldestDeathYear = oldest.yearOfDeath || currentYear;
		let oldestAge = oldestDeathYear - oldest.yearOfBirth;

		if (age > oldestAge) {
			oldest = person;
		}
	}
	return oldest;
  };
  
  // Do not edit below this line
  module.exports = findTheOldest;
  