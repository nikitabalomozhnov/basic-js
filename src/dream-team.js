const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  members = members.sort();
  let result = '';
  members.forEach((element) => {
    if (typeof element === 'string') {
			console.log(element);
			result = result.concat(element.trim().toUpperCase()[0])
    }
  });
	result = result.split('').sort().join('');
  return result.length > 0 ? result : false;
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};
