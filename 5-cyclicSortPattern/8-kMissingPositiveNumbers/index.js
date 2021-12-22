// Find the First K Missing Positive Numbers

// Given an unsorted array containing numbers and a number ‘k’,
// find the first ‘k’ missing positive numbers in the array.

// Input: [3, -1, 4, 5, 5], k=3
// Output: [1, 2, 6]
// Explanation: The smallest missing positive numbers are 1, 2 and 6.

// Input: [3, -1, 4, 5, 5], k=3
// Output: [1, 2, 6]
// Explanation: The smallest missing positive numbers are 1, 2 and 6.

function findKmissingPositiveNumbers(arr, k) {
  // first round: bring number in range (1, arr.length) to its correct position
  let i = 0
  while (i < arr.length) {
    let curNum = arr[i]

    if (curNum < 1 || curNum > arr.length) {
      i++
      continue
    }

    let correctIdx = curNum - 1
    if (i !== correctIdx && arr[correctIdx] !== correctIdx + 1) {
      ;[arr[i], arr[correctIdx]] = [arr[correctIdx], arr[i]]
    } else i++
  }

  // second round: find incorrect position, remember numbers sitting there
  const outsiders = new Set()
  const missingNums = []

  for (let [idx, num] of arr.entries()) {
    // exit early
    if (missingNums.length === k) return missingNums

    if (num !== idx + 1) {
      missingNums.push(idx + 1)
      outsiders.add(num)
    }
  }

  // not find enough, starting from numbers right after last one (check remembered list, could be there)
  let nextMissing = arr.length + 1
  while (missingNums.length < k) {
    if (!outsiders.has(nextMissing)) missingNums.push(nextMissing)
    nextMissing++
  }

  return missingNums
}

module.exports = {findKmissingPositiveNumbers}
