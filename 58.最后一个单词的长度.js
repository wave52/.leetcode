/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const a = s.split(' ');
  const af = a.filter(s => !!s)
  return af.length > 0 ? af[af.length - 1].length : 0
};
// @lc code=end

