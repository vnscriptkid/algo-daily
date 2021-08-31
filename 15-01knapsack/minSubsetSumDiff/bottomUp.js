function findMinSubsetSumDiff(set = []) {
  const sum = set.reduce((a, b) => a + b)
  const halfOfSum = Math.floor(sum / 2)

  const rows = set.length
  const cols = halfOfSum + 1

  // init dp matrix
  const dp = Array(rows)
    .fill(0)
    .map(() => Array(cols).fill(false))

  for (let row of dp) row[0] = true

  dp[0][set[0]] = true

  // gradually fill up the dp matrix
  for (let rowIndex = 1; rowIndex < rows; rowIndex++) {
    for (let curSum = 1; curSum < cols; curSum++) {
      if (dp[rowIndex - 1][curSum]) dp[rowIndex][curSum] = true
      else if (curSum >= set[rowIndex])
        dp[rowIndex][curSum] = dp[rowIndex - 1][curSum - set[rowIndex]]
    }
  }

  let curSum = cols - 1
  while (dp[rows - 1][curSum] === false) curSum--

  const otherSum = sum - curSum
  return Math.abs(curSum - otherSum)
}

module.exports = {findMinSubsetSumDiff}
