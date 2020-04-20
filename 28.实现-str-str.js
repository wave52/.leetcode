/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === '') return 0;
  if (needle.length > haystack.length) return -1;
  let i = 0;
  while(i <= haystack.length - 1){
    if (haystack[i] === needle[0]) {
      let j = 0;
      while(j <= needle.length - 1) {
        if(haystack[i + j] === needle[j]) {
          j+=1;
        } else {
          break;
        }
      }
      if(j === needle.length) {
        break;
      } else {
        i+=1;
        continue;
      }
    } else {
      i+=1;
    }
  }
  if (i > haystack.length - 1) return -1;
  else return i;
};
// @lc code=end

