function countWaysToAddSymbols(nums, targetSum) {
  const sum = nums.reduce((a, b) => a + b)

  const subsetSum = Math.floor((sum + targetSum) / 2)

  // init dp[][] matrix
  const rows = nums.length
  const cols = subsetSum + 1

  const dp = Array(rows)
    .fill(0)
    .map(() => Array(cols).fill(0))

  // init first col
  for (let row of dp) row[0] = 1

  // init first row
  for (let col = 1; col < cols; col++) dp[0][col] = nums[0] === col ? 1 : 0

  // fill up the dp[][] matrix
  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      dp[row][col] += dp[row - 1][col]

      if (col >= nums[row]) dp[row][col] += dp[row - 1][col - nums[row]]
    }
  }

  return dp[rows - 1][cols - 1]
}

module.exports = {countWaysToAddSymbols}
