// Target Sum

// You are given a set of positive numbers and a target sum ‘S’.
// Each number should be assigned either a ‘+’ or ‘-’ sign.
// We need to find the total ways to assign symbols to make the sum of the numbers equal to the target ‘S’.

// Input: {1, 1, 2, 3}, S=1 => sum: 7, target: 1 => newTarget: 4
// Output: 3
// Explanation: The given set has '3' ways to make a sum of '1': {+1-1-2+3} & {-1+1-2+3} & {+1+1+2-3}

// s1 - s2 = target
// s1 + s2 = sum
// 2 * s1 = target + sum
// s1 = (target + sum) / 2

//    0  1  2  3  4
// 1  1  1  0  0  0
// 1  1  2  1  0  0
// 2  1  2  2  2
// 3  1

function countWaysToAddSymbols(arr, target) {
  const sum = arr.reduce((a, i) => a + i, 0)
  const newTarget = Math.floor((target + sum) / 2)

  const rows = arr.length
  const cols = newTarget + 1

  const dp = createMatrix(rows, cols)

  // init matrix
  // first col
  for (let row of dp) row[0] = 1
  // first row
  dp[0][arr[0]] = 1

  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      const curNum = arr[row]
      // fill dp[row][col]
      // 2 choices
      // choice 1: skip curNum
      dp[row][col] += dp[row - 1][col]
      // choice 2: take curNum
      if (col >= curNum) {
        dp[row][col] += dp[row - 1][col - curNum]
      }
    }
  }

  return dp[rows - 1][cols - 1]
}

function createMatrix(rows, cols) {
  return Array(rows)
    .fill(null)
    .map(() => Array(cols).fill(0))
}

module.exports = {countWaysToAddSymbols}
