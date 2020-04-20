/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if(x === 1) return 1;
  function findSqrt(start, end) {
    if(start >= end - 1) return start;
    const mid = Math.floor((start + end) / 2);
    if (x === mid ** 2) return mid;
    if (x < mid ** 2) return findSqrt(start, mid);
    if(x > mid ** 2) return findSqrt(mid, end);
  }
  return findSqrt(0, x);
};
