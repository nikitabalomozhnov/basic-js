const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let arrCopy = Array.from(arr);
  const discardPrev = '--discard-prev';
  const doublePrev = '--double-prev';
  const discardNext = '--discard-next';
  const doubleNext = '--double-next';
  for (let i = 0; i < arrCopy.length; i++) {
    if (arrCopy[i] === doublePrev && i !== 0) {
      arrCopy[i] = arrCopy[i - 1];
    } else if (arrCopy[i] === doublePrev && i === 0) {
      arrCopy.splice(i, 1);
    } else if (arrCopy[i] === discardPrev && i !== 0) {
      arrCopy.splice(i - 1, 2);
    } else if (arrCopy[i] === discardPrev && i === 0) {
      arrCopy.splice(i, 1);
    } else if (arrCopy[i] === discardNext && i !== arrCopy.length - 1) {
      arrCopy.splice(i, 2);
      if (arrCopy[i] === doublePrev || arrCopy[i] === discardPrev) {
        arrCopy.splice(i, 1);
      }
    } else if (arrCopy[i] === doubleNext && i !== arrCopy.length - 1) {
      arrCopy[i] = arrCopy[i + 1];
    } else if (arrCopy[i] === doubleNext && i === arrCopy.length - 1) {
      arrCopy.splice(i, 1);
    } else if (arrCopy[i] === discardNext && i === arrCopy.length - 1) {
      arrCopy.splice(i, 1);
    }
  }
  return arrCopy;
  // remove line with error and write your code here
}

module.exports = {
  transform
};
