const data = require('../data/zoo_data');

const { species, hours } = data;

function getSchedule(scheduleTarget) {
    if (!scheduleTarget) {
        return Object.keys(hours).reduce((acc, hour) => {
            const weekDay = hour;
            if (!acc[weekDay]) {
                acc[weekDay] = {
                    'officeHour': 'Open from am until pm',
                    'exhibition': [],
                };
            }
            return acc;
        }, {});
    }
    const speciesFound = species.find((specie) => scheduleTarget === specie.name);
    return speciesFound.availability;
};

module.exports = getSchedule;
