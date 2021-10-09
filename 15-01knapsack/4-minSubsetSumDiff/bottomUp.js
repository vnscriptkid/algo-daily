function createMatrix(rows, cols) {
  return Array(rows)
    .fill(null)
    .map(() => Array(cols).fill(false))
}

function findMinSubsetSumDiff(numbers) {
  const sum = numbers.reduce((a, c) => a + c, 0)
  const target = Math.ceil(sum / 2)

  const numOfRows = numbers.length
  const numOfCols = target + 1
  const dp = createMatrix(numOfRows, numOfCols)

  // first col of dp is all true
  for (let row of dp) {
    row[0] = true
  }

  // first row, at col = nubmers[0]
  dp[0][numbers[0]] = true

  for (let curRow = 1; curRow < numOfRows; curRow++) {
    for (let curCol = 1; curCol < numOfCols; curCol++) {
      let curNum = numbers[curRow]
      // skip number
      if (dp[curRow - 1][curCol]) {
        dp[curRow][curCol] = true
        continue
      }

      // take number
      if (curCol >= curNum) dp[curRow][curCol] = dp[curRow - 1][curCol - curNum]
    }
    if (dp[curRow][numOfCols - 1]) {
      const complement = sum - target
      return target - complement
    }
  }

  for (let curCol = numOfCols - 2; curCol >= 0; curCol--) {
    for (let curRow = 1; curRow < numOfRows; curRow++) {
      if (dp[curRow][curCol]) {
        const complement = sum - curCol
        return Math.abs(curCol - complement)
      }
    }
  }
}

module.exports = {findMinSubsetSumDiff}
