/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const queue = [];
    const levels = [];
    let level = 0;
    if(!root) return [];
    queue.push(root);
    while(queue.length > 0) {
        levels.push([])
        const len = queue.length;
        for(let i=0; i< len; i++) {
            const node = queue.shift();
            if (node) {
                levels[level].push(node.val)
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
        }
        level += 1
    }  
    return levels;
};

