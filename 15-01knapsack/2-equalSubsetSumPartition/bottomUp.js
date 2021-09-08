// Given a set of positive numbers,
// find if we can partition it into two subsets such that the sum of elements in both subsets is equal.

//    0  1  2  3  4  5
// 1  T  T  F  F  F  F
// 2  T  T  T  T  F  F
// 3  T  T  T  T  T  T
// 4  T

// [1,2,3,4]
// sum: 10
// targetSum: 5

function generateMatrix(rows, cols) {
  return Array(rows)
    .fill(null)
    .map(() => Array(cols).fill(false))
}

function canPartitionEqually(nums) {
  const sum = nums.reduce((a, b) => a + b)

  if (sum % 2 === 1) return false

  const rows = nums.length

  const cols = sum / 2 + 1

  const dp = generateMatrix(rows, cols)

  for (let row of dp) {
    row[0] = true
  }

  for (let col = 0; col < cols; col++) {
    if (nums[0] === col) dp[0][col] = true
  }

  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      let curNum = nums[row]

      // if i skip it
      if (dp[row - 1][col] === true) {
        dp[row][col] = true
        continue
      }

      if (col >= curNum) {
        dp[row][col] = dp[row - 1][col - curNum]
      }
    }
  }

  return dp.some(row => row[cols - 1])
}

module.exports = {canPartitionEqually}
