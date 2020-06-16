/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  var result = []
  var trackList = []

  function backtrack(nums, track) {
    // 满足结束条件
    if(track.length === nums.length) {
      result.push([...track])
      return
    }


    for(let i = 0; i < nums.length; i++) {
      // 排除不合法的选择
      if(track.includes(nums[i])) {
        continue;
      }
      // 做选择
      track.push(nums[i])
      // 下一层决策树
      backtrack(nums, track);
      // 取消选择
      track.pop()
    }
  }

  backtrack(nums, trackList)

  return result
};

// @lc code=end

