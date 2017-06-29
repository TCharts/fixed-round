/**
 * Created by hustcc.
 * Contract: i@hust.cc
 */


/**
 * 四舍五入一个数字，可以指定小数位
 * @param number
 * @param fixed
 * @returns {number}
 */
function fixedRound(number, fixed) {
  if (fixed === undefined || fixed === null) {
    fixed = 0;
  }
  if (typeof number !== 'number' || typeof fixed !== 'number') {
    throw new Error('Parameters should be type of number!')
  }
  var t = Math.pow(10, fixed);
  return Math.round(number * t) / t;
}

module.exports = fixedRound;
