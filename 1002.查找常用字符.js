/*
 * @lc app=leetcode.cn id=1002 lang=javascript
 *
 * [1002] 查找常用字符
 */

// @lc code=start
/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
  const first = A.shift()
  let arr = []
  for (let i = 0; i < first.length; i++) {
    if (A.every((item) => item.includes(first[i]))) {
      arr.push(first[i])
      A = A.map((item) => {
        const index = item.indexOf(first[i])
        item = item.substring(0, index) + item.substring(index + 1, item.length)
        return item
      })
    }
  }
  return arr
};
// @lc code=end

