/*
 * @lc app=leetcode.cn id=887 lang=javascript
 *
 * [887] 鸡蛋掉落
 */

// @lc code=start
/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function (K, N) {
  // 备忘录
  var memo = {}
  // dp
  function dp(K, N) {
    // base case
    if (K === 1) return N
    if (N === 0) return 0

    if(memo[`${K}-${N}`]) return memo[`${K}-${N}`]

    // 要用二分法，线性暴力求过不了
    let lo = 1;
    let hi = N;
    let res = Infinity;
    while (lo <= hi) {
      const mid = Math.floor((lo + hi) / 2)
      const broken = dp(K - 1, mid - 1) // 碎
      const not_broken = dp(K, N - mid) // 没碎
        // res = Math.min(Math.max(broken，not_broken) + 1) // Time Limit Exceeded
      if (broken > not_broken) {
        hi = mid - 1
        res = Math.min(res, broken + 1)
      } else {
        lo = mid + 1
        res = Math.min(res, not_broken + 1)
      }

    }

    memo[`${K}-${N}`] = res
    return res
  }

  return dp(K, N)
};

// console.log(superEggDrop(1, 2))
console.log(superEggDrop(4, 5000))

// @lc code=end

