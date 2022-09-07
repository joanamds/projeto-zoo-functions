const data = require('../data/zoo_data');

const { prices } = data;

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

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
  const entry = 0;
  if (!entrants) {
    return entry;
  }
}

module.exports = { calculateEntry, countEntrants };

console.log(calculateEntry({}));
