/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;
  var map = [];
  map[0] = 0;
  map[1] = 1;
  map[2] = 2;
  var i = 3;
  while (i <= n) {
    map[i] = map[i - 1] + map[i - 2];
    i++;
  }
  return map[n];
};
