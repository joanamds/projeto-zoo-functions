const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const getSpecie = species.find((specie) => specie.name === animal);
  const getResidents = getSpecie.residents;
  const compareAge = getResidents.every((resident) => resident.age >= age);
  return compareAge;
}

module.exports = getAnimalsOlderThan;
