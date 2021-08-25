function canPartitionEqually(givenSet) {
  const sum = givenSet.reduce((a, b) => a + b);

  if (sum % 2 !== 0) return false;

  const halfOfSum = sum / 2;

  const n = givenSet.length;

  const cache = {};

  function canPartitionRecursive(curIndex, curSum) {
    // base case
    if (curSum === 0) return true;

    if (curIndex === n) return false;

    const args = Array.from(arguments);

    if (args in cache) return cache[args];

    // at curIndex, we have 2 choices
    // choice 1: include curIndex, only if there's enough curSum
    if (curSum >= givenSet[curIndex]) {
      if (canPartitionRecursive(curIndex + 1, curSum - givenSet[curIndex]))
        return true;
    }

    // choice 2: skip it
    const result = canPartitionRecursive(curIndex + 1, curSum);

    cache[args] = result;

    return result;
  }

  return canPartitionRecursive(0, halfOfSum);
}

module.exports = { canPartitionEqually };
