const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const ages = entrants.map((entrant) => entrant.age);
  const child = ages.filter((age) => age < 18);
  const adult = ages.filter((age) => age >= 18 && age < 50);
  const senior = ages.filter((age) => age >= 50);
  const count = {
    child: child.length,
    adult: adult.length,
    senior: senior.length,
  };
  return count;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }

  const entries = countEntrants(entrants);
  const childEntries = prices.child * entries.child;
  const adultEntries = prices.adult * entries.adult;
  const seniorEntries = prices.senior * entries.senior;
  const entry = childEntries + adultEntries + seniorEntries;

  return entry;
}

module.exports = { calculateEntry, countEntrants };
