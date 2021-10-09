// [1, 2, 7, 1, 5]

function findMinSubsetSumDiff(numbers) {
  const sum = numbers.reduce((a, i) => a + i, 0)
  let minDiff = Infinity
  const cache = {}

  function _findMinSubsetSumDiff(curSum, curIndex) {
    const args = [curSum, curIndex]
    if (cache[args] !== undefined) return

    if (curIndex === numbers.length) {
      const curDiff = Math.abs(curSum - (sum - curSum))
      minDiff = Math.min(minDiff, curDiff)
      return
    }

    // Choice 1: take curNum
    _findMinSubsetSumDiff(curSum + numbers[curIndex], curIndex + 1)

    // Choice 2: skip curNum
    _findMinSubsetSumDiff(curSum, curIndex + 1)
    cache[args] = true
  }

  _findMinSubsetSumDiff(0, 0)

  return minDiff
}

module.exports = {findMinSubsetSumDiff}
