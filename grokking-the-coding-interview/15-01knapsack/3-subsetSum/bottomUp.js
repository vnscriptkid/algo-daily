// Given a set of positive numbers, determine if a subset exists whose sum is equal to a given number ‘S’.
// set = [1, 2, 3, 7],
//        0  1  2  3
// S = 6

// const set = [1, 2, 3, 7],
// S = 6

//      0 1 2 3 4 5 6
// (1)0 T T F F F F F
// (2)1 T T T T F F F
// (3)2 T T T T T T T
// (7)3 T

function generateMatrix(rows, cols) {
  return Array(rows)
    .fill(null)
    .map(() => Array(cols).fill(false))
}

function canFindSubset(nums, sum) {
  const rows = nums.length
  const cols = sum + 1

  const dp = generateMatrix(rows, cols)

  // initialize dp
  for (let row of dp) {
    row[0] = true
  }

  dp[0][nums[0]] = true

  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      if (dp[row - 1][col]) {
        dp[row][col] = true
        continue
      }

      let curNum = nums[row]
      if (col >= curNum) {
        dp[row][col] = dp[row - 1][col - curNum]
      }
    }

    if (dp[row][cols - 1]) return true
  }

  return false
}

module.exports = {canFindSubset}
