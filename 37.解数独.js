/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  // var result = false

  function isValid(b, row, col, n) {
    for (let i = 0; i < 9; i++) {
      // 判断行
      if(b[i][col] === n) return false
      // 判断列
      if(b[row][i] === n) return false
      // 判断 3*3
      if (b[Math.floor(row/3)*3 + Math.floor(i/3)][Math.floor(col/3)*3 + i%3] === n) {
        return false;
      }
    }
    return true
  }

  function backtrack(b, row, col) {
    // console.log(b)
    if(row === 9) {
      return true;
    }

    if(col === 9) { // 下一行
      return backtrack(b, row + 1, 0)
    }

    if(b[row][col] !== '.') {
      return backtrack(b, row, col + 1)
    }

    for(let i = 1; i <= 9; i++) {
      if(!isValid(b, row, col, `${i}`)) {
        continue;
      }
      // 做选择
      b[row][col] = `${i}`
      // 下一层决策树
      if(backtrack(b, row, col + 1)) {
        return true
      }
      // 撤销选择
      b[row][col] = '.'
    }
    return false
  }

  return backtrack(board, 0, 0)
};

console.log(solveSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]))
// @lc code=end

