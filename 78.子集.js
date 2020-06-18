/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  var result = []
  var trackList = []

  function backtrack(nums, start, track) {
    result.push([...track])

    for(let i = start; i < nums.length; i++) {
      // 做选择
      track.push(nums[i])
      // 决策树下一层
      backtrack(nums, i + 1, track)
      // 撤销选择
      track.pop()
    }
  }

  backtrack(nums, 0, trackList)

  return result
};


// @lc code=end

