const data = require('../data/zoo_data');

const { species, hours } = data;

function getSchedule(scheduleTarget) {
    if (!scheduleTarget) {
        const weekDays = Object.keys(hours).reduce((acc, hour) => {
            const days = hour;
            if (!acc[days]) {
                acc[days] = {
                    'officeHours': 'Open from am until pm', 
                    'exhibition': [],
                };
            }
            return acc;
        }, []);
        return weekDays;
    }
    const speciesFound = species.find((specie) => scheduleTarget === specie.name);

    if(!speciesFound) {
        const dayFound = hours.find((hour) => scheduleTarget === hour);
        return dayFound;
    }
    return speciesFound.availability;
};

module.exports = getSchedule;
