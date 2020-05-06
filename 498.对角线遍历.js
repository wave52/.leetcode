/*
 * @lc app=leetcode.cn id=498 lang=javascript
 *
 * [498] 对角线遍历
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function (matrix) {
  let arr = [];
  let results = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (arr[i + j]) {
        arr[i+j].push(matrix[i][j])
      } else {
        arr[i+j] = [matrix[i][j]]
      }
    }
  }
  results = arr.reduce((total, current, index) => {
    if (index % 2 === 1) {
      return [...total, ...current]
    } else {
      return [...total, ...current.reverse()]
    }
  }, [])
  return results;
};
// @lc code=end
