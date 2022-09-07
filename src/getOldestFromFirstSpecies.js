const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const getEmployee = employees.find((employee) => id.includes(employee.id));
  const responsible = getEmployee.responsibleFor;
  const getSpecies = species.find((specie) => responsible.includes(specie.id));
  const animals = getSpecies.residents;
  const ages = animals.map((resident) => resident.age);
  const maxAge = Math.max(...ages);

  const oldestAnimal = animals.find((animal) => animal.age === maxAge);
  const oldestInfo = [`${oldestAnimal.name}`, `${oldestAnimal.sex}`, oldestAnimal.age];
  return oldestInfo;
}

module.exports = getOldestFromFirstSpecies;
