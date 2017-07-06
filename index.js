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
  if (!fixed) {
    fixed = 0;
  }
  // 输入必须为数字
  if (typeof number !== 'number' || typeof fixed !== 'number')
    throw new Error('Parameters should be type of number!');
  // fixed 必须为整数
  if (fixed % 1 !== 0)
    throw new Error('Parameter `fixed` should be an integer!');

  if (fixed === 0) return Math.round(number);
  var t = Math.pow(10, fixed);
  return Math.round(number * t) / t;
}

module.exports = fixedRound;
