/*
 * @lc app=leetcode.cn id=2347 lang=javascript
 *
 * [2347] 最好的扑克手牌
 */

// @lc code=start
/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function (ranks, suits) {
  if (suits.every((suit) => suit === suits[0])) return "Flush";
  const map = {};
  for (let i = 0; i < ranks.length; i++) {
    map[ranks[i]] = (map[ranks[i]] || 0) + 1;
  }
  const values = Object.values(map);
  if (values.includes(3) || values.includes(4)) return "Three of a Kind";
  if (values.includes(2)) return "Pair";
  return "High Card";
};
// @lc code=end
