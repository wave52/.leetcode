/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  function palindrome(s, l, r) {
    // 防止索引越界
    while (l >= 0 && r < s.length && s[l] == s[r]) {
      // 向两边展开
      l--; r++;
    }
    // 返回以 s[l] 和 s[r] 为中心的最长回文串
    return s.substr(l + 1, r - l - 1);
  }

  let res = ''
  for (let i = 0; i < s.length; i++) {
    // 以 s[i] 为中心的最长回文子串
    const s1 = palindrome(s, i, i);
    // 以 s[i] 和 s[i+1] 为中心的最长回文子串
    const s2 = palindrome(s, i, i + 1);
    // res = longest(res, s1, s2)
    res = res.length > s1.length ? res : s1;
    res = res.length > s2.length ? res : s2;
  }
  return res;

};



