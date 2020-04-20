/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 报数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */

// : 1,2,11
// 1
// 11
// 21
// 1211
// 111221
// 312211
var countAndSay = function(n) {
  if (n === 1) return '1'
  const du = (str) => {
    let i = 0;
    let map = []; // [{ key: 1, value: 3 }]
    while (i < str.length) {
      if (map.length === 0 || str[i] !== map[map.length-1].key) {
        map.push({ key: str[i], value: 1 })
      } else {
        map[map.length-1].value += 1;
      }
      i++
    }
    return map.reduce((result, item) => `${result}${item.value}${item.key}` , '');
  }
  return du(countAndSay(n - 1))
};
// @lc code=end

