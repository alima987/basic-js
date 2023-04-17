const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indexes = arr.map((x, i) => ({index: i, value: x})).filter((x) => x.value !== -1).sort((a, b) => a.value - b.value).map((x) => x.index).sort((a, b) => a - b);
  const sortedByValues = arr.map((x, i) => ({index: i, value: x})).filter((x) => x.value !== -1).sort((a, b) => a.value - b.value).map((x, i) => ({
    index: indexes[i],
    value: x.value
  }));

  for (let i of sortedByValues) {
    arr[i.index] = i.value;
  }

  return arr;
}

module.exports = {
  sortByHeight
};
