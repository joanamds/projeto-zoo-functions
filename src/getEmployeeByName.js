const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }

  const getEmployee = employees.find((employee) => employee.firstName === employeeName 
  || employee.lastName === employeeName);
  return getEmployee;
}

module.exports = getEmployeeByName;
