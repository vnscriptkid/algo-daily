function countSubsetSum(set, sum) {
  // let init dp[][] matrix
  const rows = set.length;
  const cols = sum + 1;
  const dp = Array(rows)
    .fill(0)
    .map(() => Array(cols).fill(0));

  // first col init
  for (let row of dp) row[0] = 1;

  // first row init
  for (let col = 1; col < cols; col++) dp[0][col] = set[0] === col ? 1 : 0;

  // gradually fill up the matrix dp[][]
  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      const curNum = set[row];
      // at each cell, there's 2 choices
      // choice 1: include curNum (only if col >= curNum)
      let count1 = 0;
      if (col >= curNum) count1 = dp[row - 1][col - curNum];
      // choice 2: not include curNum
      let count2 = dp[row - 1][col];
      // sum 2 choices
      dp[row][col] = count1 + count2;
    }
  }

  return dp[rows - 1][cols - 1];
}

module.exports = { countSubsetSum };
