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
  if (arguments.length === 0) {
    return 'Unable to determine the time of year!';
  }
  if (typeof date !== 'object' || date === null || !(date instanceof Date)) {
    throw new Error('Invalid date!');
  }
  if (date.toString() === new Date().toString()) {
    throw new Error('Invalid date!');
  }
  const winterMonth = [11, 12, 0, 1];
  const springMonth = [2, 3, 4];
  const summerMonth = [5, 6, 7];
  const fallMonth = [8, 9, 10];
  if (winterMonth.includes(date.getMonth())) {
    return 'winter';
  } else if (springMonth.includes(date.getMonth())) {
    return 'spring';
  } else if (summerMonth.includes(date.getMonth())) {
    return 'summer';
  } else if (fallMonth.includes(date.getMonth())) {
    return 'fall';
  }
  return 'Unable to determine the time of year!';
}

module.exports = {
  getSeason,
};
