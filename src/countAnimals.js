const data = require('../data/zoo_data');

const { species }   = data;

const countAnimals = (animal) => {
    return species.reduce((acc, specie) => {
        const animals = specie.name;
        if(!acc[animals]) {
            acc[animals] = specie.residents.length;
        } 
        return acc;
    }, {});
}

module.exports = countAnimals;

console.log(countAnimals());

