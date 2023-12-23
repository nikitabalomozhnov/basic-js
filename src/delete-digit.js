const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = [];
  const temp = n.toString();
  for (let i = 0; i < temp.length; i++) {
    let temp2 = temp.slice(0, i) + temp.slice(i + 1);
    arr.push(Number(temp2));
  }
  return Math.max(...arr);
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
