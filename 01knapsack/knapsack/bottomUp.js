function findBestCombination(profits, weights, capacity) {
  const rows = profits.length;
  const dp = Array(rows)
    .fill(0)
    .map(() => Array(capacity + 1).fill(0));

  // init first line of dp matrix, include the first item or not
  for (let curCapacity = 0; curCapacity <= capacity; curCapacity++) {
    if (curCapacity >= weights[0]) dp[0][curCapacity] = profits[0];
  }

  // fill the dp[][] gradually
  dp.forEach((row, itemIndex) => {
    if (itemIndex === 0) return;
    row.forEach((col, curCapacity) => {
      if (curCapacity === 0) return;

      // choice 1: not include itemIndex
      let skipIt = dp[itemIndex - 1][curCapacity];

      // choice 2: include itemIndex
      let takeIt = 0;
      const weight = weights[itemIndex];
      if (curCapacity >= weight)
        takeIt = profits[itemIndex] + dp[itemIndex][curCapacity - weight];

      // which one is better
      dp[itemIndex][curCapacity] = Math.max(skipIt, takeIt);
    });
  });

  // finally
  return dp[rows - 1][capacity];
}

module.exports = { findBestCombination };
