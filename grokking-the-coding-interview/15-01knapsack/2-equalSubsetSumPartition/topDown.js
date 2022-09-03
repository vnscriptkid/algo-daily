// Given a set of positive numbers,
// find if we can partition it into two subsets such that the sum of elements in both subsets is equal.

// [1,2,3,4]
// sum: 10
// targetSum: 5

//
//  1:         1          _
//            / \        /  \
//  2:       2    _      2    _
//          / \  / \    / \  / \
//  3:     3  _  3  _  3  _  3  _
//        /\  /\ /\ /\ /\ /\ /\ /\
//  4:   4 _  4_ 4_ 4_ 4_ 4_ 4_ 4_

function dfs(numbers, targetSum) {
  const cache = {}

  function _dfs(curIndex, targetSum) {
    // base case
    if (curIndex === numbers.length) return false

    if (numbers[curIndex] === targetSum) return true

    // recursive calls

    let takeCurrentNum = false

    if (cache[[curIndex, targetSum]] !== undefined)
      return cache[[curIndex, targetSum]]

    if (numbers[curIndex] < targetSum) {
      takeCurrentNum = _dfs(curIndex + 1, targetSum - numbers[curIndex])
    }

    const skipCurrentNum = _dfs(curIndex + 1, targetSum)

    const result = takeCurrentNum || skipCurrentNum

    cache[[curIndex, targetSum]] = result

    return result
  }

  return _dfs(0, targetSum)
}

function canPartitionEqually(numbers) {
  const sum = numbers.reduce((a, b) => a + b)

  if (sum % 2 === 1) return false

  const halfOfSum = sum / 2

  return dfs(numbers, halfOfSum)
}

module.exports = {canPartitionEqually}
