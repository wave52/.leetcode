/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    var pStack = [];
    var qStack = [];
    pStack.push(p);
    qStack.push(q);
    while (pStack.length > 0) {
        var pNode = pStack.pop();
        var qNode = qStack.pop();
        if (!(!pNode && !qNode) && (!pNode || !qNode)) {
            return false
        }
        if (pNode === null && qNode === null) {
            continue;
        } else if (pNode.val === qNode.val) {
            pStack.push(pNode.right);
            pStack.push(pNode.left);
            qStack.push(qNode.right);
            qStack.push(qNode.left);
            continue;
        } else {
            return false
        }
    }
    if (pStack.length !== qStack.length) return false;
    return true;
};

