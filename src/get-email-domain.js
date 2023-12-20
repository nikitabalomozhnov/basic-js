const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let temp = email.slice(email.indexOf('@') + 1);
	return temp.includes('@') ? temp.slice(email.indexOf('@')) : temp;
  // remove line with error and write your code here
}

module.exports = {
  getEmailDomain
};
