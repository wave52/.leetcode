/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  var map = {};
  for (let i = 0; i < s.length; i++) {
    var c = s.charAt(i);
    if (map[c]) map[c] += 1;
    else map[c] = 1;
  }
  let result = 0;
  let flag = false;
  for (let k in map) {
    if (map[k] % 2 === 0) result += map[k];
    if (map[k] % 2 === 1 && map[k] > 2) {
      if (flag) {
        result = result + map[k] - 1;
      } else {
        result += map[k];
        flag = true;
      }
    }
    if (map[k] === 1 && !flag) {
      result += 1;
      flag = true;
    }
  }
  return result;
};
