// Given the weights and profits of ‘N’ items, we are asked to put these items in a knapsack which has a capacity ‘C’. The goal is to get the maximum profit out of the items in the knapsack. Each item can only be selected once, as we don’t have multiple quantities of any item.

// Items: { Apple, Orange, Banana, Melon }
// Weights: { 2, 3, 1, 4 }
// Profits: { 4, 5, 3, 7 }
//                        ^
//            A  B  C  D
// Knapsack capacity: 5

// A (2,4)         A              0
//                / \            / \
// B (3,5)       B    0         B    0
//              / \  / \       / \  / \
// C (1,3)     C   0 C  0     C  0  C  0
//            /\   /\/\ / \   /\  /\ /\ /\
// D (4,7)   D  0 D 0D 0D 0  D 0 D 0D 0D 0
// O(2^n)

//        0 1 2 3 4 5
// _      0 0 0 0 0 0
// A(2,4) 0 0 4 4 4 4
// B(3,5) 0 0 4 5 5 9     (9,4)
// C(1,3) 0
// D(4,7) 0         x

function findMaxProfitBF(profits, weights, capacity) {
  const rows = profits.length + 1
  const cols = capacity + 1

  const dp = generateMatrix(rows, cols)

  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      let maxProfitIfTakeIt = 0

      if (col >= weights[row - 1]) {
        maxProfitIfTakeIt =
          profits[row - 1] + dp[row - 1][col - weights[row - 1]]
      }

      let maxProfitIfSkipIt = dp[row - 1][col]

      dp[row][col] = Math.max(maxProfitIfSkipIt, maxProfitIfTakeIt)
    }
  }

  return dp[rows - 1][cols - 1]
}

function generateMatrix(rows, cols) {
  return Array(rows)
    .fill(0)
    .map(() => Array(cols).fill(0))
}

module.exports = {findMaxProfitBF}
