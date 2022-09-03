// Minimum Subset Sum Difference
// Given a set of positive numbers, partition the set into two subsets with minimum difference between their subset sums.

// 10
// {5} {5} => 0

// Input: {1, 2, 3, 9} => 15 = 6 + 9

//    0  1  2  3  4  5  6  7
// 1  T  T  F  F  F  F  F  F
// 2  T  T  T  T  F  F  F  F
// 3  T  T  T  T  T  T  T  F
// 9  T  T  T  T  T  T  T  F

// Output: 3
// Explanation: We can partition the given set into two subsets where minimum absolute difference
// between the sum of numbers is '3'. Following are the two subsets: {1, 2, 3} & {9}.

function createMatrix(rows, cols) {
  return Array(rows)
    .fill(null)
    .map(() => Array(cols).fill(false))
}

function findMinSubsetSumDiff(numbers) {
  const numOfRows = numbers.length
  const sum = numbers.reduce((a, i) => a + i, 0)
  const numOfCols = Math.floor(sum / 2) + 1

  const dp = createMatrix(numOfRows, numOfCols)

  for (let row of dp) {
    row[0] = true
  }

  dp[0][numbers[0]] = true

  for (let row = 1; row < numOfRows; row++) {
    for (let col = 1; col < numOfCols; col++) {
      if (dp[row - 1][col]) {
        dp[row][col] = true
        continue
      }

      if (col >= numbers[row]) {
        dp[row][col] = dp[row - 1][col - numbers[row]]
      }
    }
  }

  let col = numOfCols - 1
  while (dp[numOfRows - 1][col] === false) {
    col--
  }

  let otherSum = sum - col
  return Math.abs(col - otherSum)
}

module.exports = {findMinSubsetSumDiff}
