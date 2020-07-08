/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function(shorter, longer, k) {
  if (k === 0) return []
  else if (shorter === longer) return [shorter * k]
  else if (shorter !== longer) {
    let arr = []
    for (let i = 0; i <= k; i++) {
      arr.push(shorter * (k - i) + longer * i)
    }
    return arr
  }
};
// 数学题？？？
console.log(divingBoard(1, 2, 3));
console.log(divingBoard(1, 1, 100000));
