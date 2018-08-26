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
  if (!fixed) fixed = 0;

  var n = Number(number);

  if (fixed === 0) return Math.round(n);
  var t = Math.pow(10, fixed);
  return Math.round(n * t) / t;
}

module.exports = fixedRound;
