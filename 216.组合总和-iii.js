/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const res = [];
  const dfs = (start, path, sum) => {
    if (path.length === k) {
      if (sum === n) {
        res.push(path.slice());
      }
      return;
    }
    for (let i = start; i <= 9; i++) {
      path.push(i);
      dfs(i + 1, path, sum + i);
      path.pop();
    }
  };
  dfs(1, [], 0);
  return res;
};
// @lc code=end

console.log(combinationSum3(3, 7));
console.log(combinationSum3(3, 9));
