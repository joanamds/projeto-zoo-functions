const data = require('../data/zoo_data');

const { species, employees } = data;

function getEmployeesCoverage(entry) {
  const buildObject = (object) => {
    const getEmployee = employees.find((employee) => employee.firstName === object.name
    || employee.lastName === object.name
    || employee.id === object.id);
    if (!getEmployee) {
      throw new Error('Informações inválidas');
    }
    const getSpecies = species.filter((specie) => getEmployee.responsibleFor.includes(specie.id));
    return { id: getEmployee.id,
      fullName: `${getEmployee.firstName} ${getEmployee.lastName}`,
      species: getSpecies.map((specie) => specie.name),
      locations: getSpecies.map((specie) => specie.location),
    };
  };
  if (!entry) {
    return employees.map((employee) => buildObject(employee));
  }
  return buildObject(entry);
}

module.exports = getEmployeesCoverage;
