const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'a', 'b', 'c', 'd', 'e', 'f'];
  let temp = n.split('-');
  if (temp.length !== 6) {
    return false;
  }
  let flag = true;
  temp.map((block) => {
    if (block.length !== 2) {
      flag = false;
    }
    block.split('').forEach((letter) => {
      if ((Number.isInteger(letter) && Number.parseInt(letter) < 0)) {
        flag = false;
				return;
      } else if (!Number.isInteger(Number.parseInt(letter)) && letters.indexOf(letter) === -1) {
				flag = false;
				return;
			}
    });
  });
  return flag;
  // remove line with error and write your code here
}
module.exports = {
  isMAC48Address
};
