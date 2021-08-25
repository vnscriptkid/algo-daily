function findBestCombination(profits, weights, capacity) {
  let count = 0
  const cache = {}
  function findRecursive(capacity, curIndex) {
    count++

    // base case
    if (capacity <= 0 || curIndex >= weights.length) return 0

    const args = Array.from(arguments)

    if (args in cache) return cache[args]

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
    const result = Math.max(takeIt, skipIt)

    cache[args] = result

    return result
  }

  const result = findRecursive(capacity, 0)

  return result
}

module.exports = {findBestCombination}
