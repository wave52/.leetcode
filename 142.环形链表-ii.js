/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let hasCycle = false
  let fast = head
  let slow = head
  if (!head || !head.next) return null

  while (fast.next != null && fast.next.next != null && slow.next != null) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) {
      hasCycle = true;
      break
    }
  }

  if (hasCycle) {
    let q = head;
    while (slow != q) {
      slow = slow.next;
      q = q.next;
    }
    return q;
  } else
    return null;
};

// @lc code=end

