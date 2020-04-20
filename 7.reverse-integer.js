/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  function rs(num) {
    const s = num.toString();
    if (s.length > 1) {
      return rs(s.slice(1)) + s.charAt(0);
    } else {
      return s;
    }
  }
  if (x > 2147483647 || x < -2147483647) return 0;
  if (x === 0) return 0;
  if (x < 0) {
    if (-Number(rs(-x)) < -2147483647) return 0;
    return -Number(rs(-x));
  }
  if (x > 0) {
    if (Number(rs(x)) > 2147483647) return 0;
    return Number(rs(x));
  }
};
