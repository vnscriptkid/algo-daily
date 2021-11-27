// Target Sum

// You are given a set of positive numbers and a target sum ‘S’.
// Each number should be assigned either a ‘+’ or ‘-’ sign.
// We need to find the total ways to assign symbols to make the sum of the numbers equal to the target ‘S’.

// Input: {1, 1, 2, 3}, S=1
// Output: 3
// Explanation: The given set has '3' ways to make a sum of '1': {+1-1-2+3} & {-1+1-2+3} & {+1+1+2-3}

// +1-1-2+3
// (1 + 3) - (1 + 2)

// {+1+1+2-3}
// (1 + 1 + 2) - (3)
// A - B = targetSum
// A + B = sum
// 2 * A = targetSum + sum
// A = (targetSum + sum) / 2

//   0  1  2  3  4
// 1 1  1  0  0  0
// 1 1  x
// 2 1
// 3 1           y

function countWaysToAddSymbols(arr, target) {
  let sum = arr.reduce((a, b) => a + b, 0)

  let newTarget = Math.floor((sum + target) / 2)

  let rows = arr.length
  let cols = newTarget + 1

  let dp = createMatrix(rows, cols)

  // first col
  for (let row of dp) row[0] = 1
  // first row
  dp[0][arr[0]] = 1

  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      let curNum = arr[row]

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
