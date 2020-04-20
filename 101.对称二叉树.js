/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  function compare(left, right) {
    if (!left && !right) return true;
    if (!left || !right) return false;
    if (left.val === right.val) {
      return compare(left.left, right.right) && compare(left.right, right.left);
    }
    return false;
  }
  if (!root) return true;
  return compare(root.left, root.right);
};
