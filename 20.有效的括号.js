/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var stack = [];
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (item === "(" || item === "[" || item === "{") {
      stack.push(item);
    } else {
      const top = stack[stack.length - 1];
      if (item === ")" && top === "(") {
        stack.pop();
      } else if (item === "]" && top === "[") {
        stack.pop();
      } else if (item === "}" && top === "{") {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
// @lc code=end
