/*
 * @lc app=leetcode.cn id=1684 lang=javascript
 *
 * [1684] 统计一致字符串的数目
 */

// @lc code=start
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    let flag = true;
    for (let j = 0; j < words[i].length; j++) {
      if (!allowed.includes(words[i][j])) {
        flag = false;
        break;
      }
    }
    if (flag) {
      count++;
    }
  }
  return count;
};
// @lc code=end
