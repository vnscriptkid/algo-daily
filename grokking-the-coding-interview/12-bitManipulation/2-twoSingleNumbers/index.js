// Two Single Numbers
// In a non-empty array of numbers, every number appears exactly twice except two numbers that appear only once.
// Find the two numbers that appear only once.
// Input: [1, 4, 2, 1, 3, 5, 6, 2, 3, 5]
// 4 ^ 6
// Output: [4, 6]

function findTwoSingleNumbers(arr) {
  let axb = 0

  for (let num of arr) {
    axb = axb ^ num
  }

  // find first set (1) from the right
  let c = 1
  while ((c & axb) === 0) {
    c = c << 1
  }

  // use c to partition arr into 2 groups
  let [x, y] = [0, 0]

  for (let num of arr) {
    if ((num & c) === 0) {
      x = x ^ num
    } else {
      y = y ^ num
    }
  }

  return [x, y]
}

module.exports = {findTwoSingleNumbers}
