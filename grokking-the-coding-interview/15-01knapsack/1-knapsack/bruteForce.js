function findBestCombination(profits, weights, capacity) {
  function findRecursive(capacity, curIndex) {
    // base case
    if (capacity <= 0 || curIndex >= weights.length) return 0

    // at each call, we consider item at index `curIndex`
    // we have 2 choices: take or skip
    // choice 1: take it. But...can take only when there's enough space
    let takeIt = 0
    if (capacity >= weights[curIndex]) {
      takeIt =
        profits[curIndex] +
        findRecursive(capacity - weights[curIndex], curIndex + 1)
    }

    // choice 2: skip it
    const skipIt = findRecursive(capacity, curIndex + 1)

    // which choice is better
    return Math.max(takeIt, skipIt)
  }

  const result = findRecursive(capacity, 0)

  return result
}

module.exports = {findBestCombination}
