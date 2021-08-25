function canFindSubset(set, sum) {
  // build dp matrix
  const rows = set.length
  const cols = sum + 1

  const dp = Array(rows)
    .fill(0)
    .map(() => Array(cols).fill(false))

  // init first col
  for (let row of dp) row[0] = true

  // init first row
  dp[0][set[0]] = true

  // gradually build up the dp matrix
  for (let rowIndex = 1; rowIndex < rows; rowIndex++) {
    for (let curSum = 1; curSum < cols; curSum++) {
      if (dp[rowIndex - 1][curSum] === true) {
        dp[rowIndex][curSum] = true
      } else if (curSum >= set[rowIndex])
        dp[rowIndex][curSum] = dp[rowIndex - 1][curSum - set[rowIndex]]
    }
  }

  return dp[rows - 1][cols - 1]
}

module.exports = {canFindSubset}
