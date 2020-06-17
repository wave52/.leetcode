/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  var result = []
  var boardList = Array.from({ length: n }, () => new Array(n).fill('.'));

  function isValid(board, row, col) {
    // row 行是否有，没必要判断，只用判断正上方和斜上方
    // for (let i = 0; i < board.length; i++) {
    //   if(board[row][i] === 'Q') return false
    // }

    // col 列正上方是否有
    for (let i = 0; i < n; i++) {
      if(board[i][col] === 'Q') return false
    }

    // 左上方有没有
    for (let i = row-1, j = col-1; i >= 0 && j >= 0; i--, j--) {
      if(board[i][j] === 'Q') return false
    }

    // 右上方有没有
    for (let i = row-1, j = col+1; i >= 0 && j < n; i--, j++) {
      if(board[i][j] === 'Q') return false
    }
    return true
  }

  function backtrack(row, board) {
    // console.log(result, 'hh')
    if (row === n) {
      const temp = board.map((arr) => arr.join(''));
      result.push([...temp]);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (!isValid(board, row, i)) {
        continue;
      }

      // 做选择
      board[row][i] = 'Q'

      // 下一层决策树
      backtrack(row+1, board)

      // 撤销选择
      board[row][i] = '.'
    }

  }

  backtrack(0, boardList)

  return result
};

// console.log(solveNQueens(8))

// @lc code=end

