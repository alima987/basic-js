const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(array) {
    let levels = 1;
    let prevLength = 1;
    let currentLength = array.length;
    while (currentLength > prevLength) {
      array = array.flat();
      prevLength = currentLength;
      currentLength = array.flat();
      levels++
    }
    return levels
   
  }
}

module.exports = {
  DepthCalculator
};
