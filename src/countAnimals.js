const data = require('../data/zoo_data');

const { species } = data;

const countAnimals = (animal) => {
  if (!animal) {
    return species.reduce((acc, specie) => {
      const animals = specie.name;
      if (!acc[animals]) {
        acc[animals] = specie.residents.length;
      }
      return acc;
    }, {});
  }
  const getSpecies = species.find((specie) => specie.name === animal.specie);
  const speciesResidents = getSpecies.residents;

  if (!animal.sex) {
    return speciesResidents.length;
  }
  const getSpeciesBySex = speciesResidents.filter((resident) => resident.sex === animal.sex);
  return getSpeciesBySex.length;
};

module.exports = countAnimals;
