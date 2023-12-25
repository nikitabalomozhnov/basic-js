const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
    // remove line with error and write your code here
  },
  addLink(value) {
    value !== null ? this.arr.push(value.toString()) : this.arr.push('null');
    return this;
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (
      typeof position !== 'number' ||
      !Number.isInteger(position) ||
      position < 1 ||
      position > this.arr.length
    ) {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
    // remove line with error and write your code here
  },
  finishChain() {
    let finalStr = '';
    if (this.arr.length > 0) {
      this.arr.map((element, index) => {
        if (this.arr.length > 1 && index !== this.arr.length - 1) {
          finalStr = finalStr.concat(`( ${element} )~~`);
        } else {
          finalStr = finalStr.concat(`( ${element} )`);
        }
      });
    }
    this.arr.splice(0, this.arr.length);
    return finalStr;
    // remove line with error and write your code here
  },
};

module.exports = {
  chainMaker,
};
