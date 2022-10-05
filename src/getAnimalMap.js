const data = require('../data/zoo_data');

const { species } = data;

function getAnimalNames() {
  return species.reduce((acc, specie) => {
    const specieName = specie.name;
    const specieResidents = specie.residents;
    if(!acc[specieName]){    
      acc[specieName] = specieResidents.map((resident) => resident.name);
    }
    return acc;
  }, {});
}

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
    const names = getAnimalNames();
    return names;
}

module.exports = getAnimalMap;

console.log(getAnimalMap({ includeNames: true }));
