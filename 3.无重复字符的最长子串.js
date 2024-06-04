/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s.length) return 0;
  const map = []
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    // console.log(c, i, 1);
    for (let j = i + 1; j < s.length; j++) {
      const a = s[j]
      // console.log(a, j, 2);
      if (c.includes(a)) {
        break;
      } else {
        c = c + a;
      }
    }
    map[i] = c.length;
  }
  // console.log(map, 99)

  return Math.max(...map)
};
// @lc code=end

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
