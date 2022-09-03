// Count of Subset Sum
// Given a set of positive numbers, find the total number of subsets whose sum is equal to a given number ‘S’.

// Input: {1, 1, 2, 3}, S=4
// Output: 3
// The given set has '3' subsets whose sum is '4': {1, 1, 2}, {1, 3}, {1, 3}
// Note that we have two similar sets {1, 3}, because we have two '1' in our input.

//    0  1  2  3  4
// 1  1  1  0  0  0
// 1  1  2  1  0  0
// 2  1  2  2  2  1
// 3  1  2  2  3  3

function createMatrix(rows, cols) {
  return Array(rows)
    .fill(null)
    .map(() => Array(cols).fill(0))
}

function countSubsetSum(nums, target) {
  const rows = nums.length
  const cols = target + 1

  const dp = createMatrix(rows, cols)

  // make assumptions
  // first col
  for (let row of dp) {
    row[0] = 1
  }
  // first row
  dp[0][nums[0]] = 1

  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      // fill up dp[row][col]
      let curNum = nums[row]
      // 2 choices

      // skip curNum
      dp[row][col] += dp[row - 1][col]
      // take curnum
      if (col >= curNum) {
        dp[row][col] += dp[row - 1][col - curNum]
      }
    }
  }

  return dp[rows - 1][cols - 1]
}

module.exports = {countSubsetSum}
