const data = require('../data/zoo_data');

const { species } = data;

const getSpeciesByIds = (ids) => {
  const findId = species.filter((specie) => specie.id === ids);
  return findId;
};

module.exports = getSpeciesByIds;
