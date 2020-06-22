/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  var s = ['(', ')'];
  var result = []
  var trackList = []

  function isValid(t, current) {
    if(current === '(') {
      if((t.filter((v) => v === '(').length >= n)) return false
    } else {
      if((t.filter((v) => v === ')').length >= n) || (t.filter((v) => v === ')').length - t.filter((v) => v === '(').length) >= 0) return false
    }
    return true
  }

  function backtrack(track) {
    if(track.length === n * 2) {
      result.push(track.join(''))
    }

    for(let i = 0; i < s.length; i++ ) {
      if(!isValid(track, s[i])) {
        continue;
      }

      track.push(s[i])

      backtrack(track)

      track.pop()
    }
  }

  backtrack(trackList)

  return result
};
// @lc code=end

