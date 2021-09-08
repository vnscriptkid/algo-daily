function canPartitionEqually(givenSet) {
  const sum = givenSet.reduce((a, b) => a + b)

  if (sum % 2 !== 0) return false

  const halfOfSum = sum / 2

  const n = givenSet.length

  function canPartitionRecursive(curIndex, curSum) {
    // base case
    if (curSum === 0) return true

    if (curIndex === n) return false

    // at curIndex, we have 2 choices
    // choice 1: include curIndex, only if there's enough curSum
    if (curSum >= givenSet[curIndex]) {
      if (canPartitionRecursive(curIndex + 1, curSum - givenSet[curIndex]))
        return true
    }

    // choice 2: skip it
    return canPartitionRecursive(curIndex + 1, curSum)
  }

  return canPartitionRecursive(0, halfOfSum)
}

module.exports = {canPartitionEqually}
