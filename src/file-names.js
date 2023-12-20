const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let obj = {};

  for (const name of names) {
    if (obj.hasOwnProperty(name)) {
      let count = 1;
      let newName = name.concat(`(${count})`);

      while (obj.hasOwnProperty(newName)) {
        count++;
        newName = name.concat(`(${count})`);
      }

      obj[newName] = 1;
    } else {
      obj[name] = 1;
    }
  }
  let result = [];
  Object.keys(obj).forEach((el) => {
    result.push(el);
  });
  return result;
}

module.exports = {
  renameFiles,
};
