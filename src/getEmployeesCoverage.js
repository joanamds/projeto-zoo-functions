const data = require('../data/zoo_data');

const { species, employees } = data;

function getEmployeesCoverage(employee) {
  if(!employee) {
    return employees.reduce((acc, employee) => {
      const names = employee.firstName;
      if(!acc[names]){
        acc[names] = {
          id: employee.id,
          fullName: `${employee.firstName} ${employee.lastName}`,
          species: employee.responsibleFor,
        }
      }
      return acc;
    }, {});
  }
}

module.exports = getEmployeesCoverage;

console.log(getEmployeesCoverage());
