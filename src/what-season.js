const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const springDate = new Date(2023, 05, 31)
  const summergDate = new Date(2023, 08, 31)
  const autumnDate = new Date(2023, 11, 31)
  const winterDate = new Date(2023, 02, 28)
  
}

module.exports = {
  getSeason
};
