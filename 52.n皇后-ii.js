/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  var resultNum = 0
  var boardList = Array.from({ length: n }, () => new Array(n).fill('.'))

  function isValid(board, row, col) {
    for (let i = 0; i <= row; i++) {
      if(board[i][col] === 'Q') return false
    }
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if(board[i][j] === 'Q') return false
    }
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if(board[i][j] === 'Q') return false
    }
    return true
  }

  function backtrack(row, board) {
    // console.log(board)
    // 满足条件
    if (row === n) {
      resultNum += 1;
    }

    for (let i = 0; i < n; i++) {
      // 排除选项
      if (!isValid(board, row, i)) {
        continue;
      }
      // 做选择
      board[row][i] = 'Q';
      // 下一决策树
      backtrack(row + 1, board);
      // 撤销选择
      board[row][i] = '.';
    }
  }

  backtrack(0, boardList)

  return resultNum
};

// @lc code=end

