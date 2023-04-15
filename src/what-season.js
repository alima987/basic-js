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
 /* date = new Date()
  let season = date.getMonth()
  if (typeof season !== 'string') {
    return false
  } if (season !== date) {
    return 'Unable to determine the time of year!';
  }*/
  date = new Date()
   let month = date
   let season = '';
    switch(month) {
        case '12':
        case '1':
        case '2':
            season = 'winter';
        break;
        case '3':
        case '4':
        case '5':
            season = 'spring';
        break;
        case '6':
        case '7':
        case '8':
            season = 'summer';
        break;
        case '9':
        case '10': 
        case '11':
            season = 'autumn';
        break;
    }
    //return season;
    if (typeof season !== 'string') {
      return false
    } if (season !== month) {
      return 'Unable to determine the time of year!';
    } if (month !== date) {
      return 'Invalid date!'
    } else {
      return true
    }
}

module.exports = {
  getSeason
};
