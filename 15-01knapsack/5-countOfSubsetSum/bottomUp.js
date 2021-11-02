function generateMatrix(rows, cols) {
  return Array(rows)
    .fill(null)
    .map(() => Array(cols).fill(0))
}

function countSubsetSum(nums, target) {
  let rows = nums.length
  let cols = target + 1

  let dp = generateMatrix(rows, cols)

  // init matrix
  // first col is all true
  for (let row of dp) {
    row[0] = 1
  }
  // first row
  dp[0][nums[0]] = 1

  // fill up table
  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      const curNum = nums[row]
      // 2 choice:
      // choice 1: not include cur num
      dp[row][col] += dp[row - 1][col]
      // choice 2: include cur num
      if (col >= curNum) dp[row][col] += dp[row - 1][col - curNum]
    }
  }

  return dp[rows - 1][cols - 1]
}

module.exports = {countSubsetSum}
