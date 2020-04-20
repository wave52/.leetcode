/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  function t(num) {
    const s = num.toString();
    let flag = true;
    for (let i = 0; i <= Math.floor(s.length / 2) - 1; i++) {
      if (s.charAt(i) !== s.charAt(s.length - 1 - i)) {
        flag = false;
      }
    }
    return flag;
  }
  if (x < 0) return false;
  return t(x);
};
