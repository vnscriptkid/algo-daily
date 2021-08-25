function canPartitionEqually(givenSet) {
  const sum = givenSet.reduce((a, b) => a + b)

  if (sum % 2 !== 0) return false

  const n = givenSet.length

  const halfOfSum = sum / 2

  // init dp[][]
  const dp = Array(n)
    .fill(0)
    .map(() => Array(halfOfSum + 1).fill(false))

  // init first col, all is true (there's always way to sum up to 0, just pick nothing)
  for (let row of dp) {
    row[0] = true
  }

  // init first row, there's only one way to pick, number that is equal to curSum
  const firstNum = givenSet[0]
  dp[0][firstNum] = true

  // fill the dp[][] matrix gradually
  for (let [rowIndex] of dp.entries()) {
    if (rowIndex === 0) continue

    const num = givenSet[rowIndex]

    for (let curSum = 1; curSum <= halfOfSum; curSum++) {
      if (dp[rowIndex - 1][curSum] === true) {
        dp[rowIndex][curSum] = true
        continue
      }

      dp[rowIndex][curSum] = curSum >= num && dp[rowIndex - 1][curSum - num]
    }
  }

  // finally
  return dp[n - 1][halfOfSum]
}

module.exports = {canPartitionEqually}
