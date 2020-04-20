/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const first = strs[0] || "";
  let s = "";
  for (let i = 0; i < first.length; i += 1) {
    if (
      strs.every(str => {
        if (i > str.length) {
          return false;
        } else {
          return str.slice(0, i + 1) === s + first[i];
        }
      })
    ) {
      s = s + first[i];
    } else {
      break;
    }
  }
  return s;
};
// @lc code=end
