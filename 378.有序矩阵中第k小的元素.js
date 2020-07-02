/*
 * @lc app=leetcode.cn id=378 lang=javascript
 *
 * [378] 有序矩阵中第K小的元素
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
// var kthSmallest = function(matrix, k) {
//   const arr = matrix.reduce((current, total) => [...current, ...total], [])
//   const sortArr = arr.sort((a, b) => a - b);
//   return sortArr[k - 1];
// };
var kthSmallest = function (matrix, k) {
  const n = matrix.length;

  function getNum(a, k, m) {
    let num = 0;
    let i = n - 1;
    let j = 0
    while (i >= 0 && j < n) {
      if (a[i][j] <= m) {
        num += i + 1 // TODO:
        j++
      } else {
        i--
      }
    }
    return num;
  }


  let left = matrix[0][0];
  let right = matrix[n - 1][n - 1];
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    const num = getNum(matrix, k, mid);
    if (num < k) {
      left = mid + 1;
    } else if (num > k) {
      right = mid - 1;
    } else if (num === k) {
      right = mid - 1;
    }
  }

  return left;

};
console.log(kthSmallest([[1,5,9],[10,11,13],[12,13,15]], 8))
// @lc code=end

