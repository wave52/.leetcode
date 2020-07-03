/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.

 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var sortedArrayToBST = function(nums) {
  function genTree(nums, left, right) {
    if (left > right) return null
    const mid = left + Math.floor((right-left) / 2);
    const root = new TreeNode(nums[mid]);
    root.left = genTree(nums, left, mid - 1)
    root.right = genTree(nums, mid + 1, right)
    return root
  }


  return genTree(nums, 0, nums.length - 1)
};

console.log(sortedArrayToBST([-10,-3,0,5,9]))

// @lc code=end

