const data = require('../data/zoo_data');

const { species } = data;

function getAnimalMap(options) {
  if (!options || options.sex) {
    return species.reduce((acc, specie) => {
      const local = specie.location;
      if (!acc[local]) {
        acc[local] = [];
      }
      acc[local].push(specie.name);
      return acc;
    }, {});
  }
}

module.exports = getAnimalMap;

console.log(getAnimalMap());
