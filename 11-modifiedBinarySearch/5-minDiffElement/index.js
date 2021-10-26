// Minimum Difference Element

// Given an array of numbers sorted in ascending order,
// find the element in the array that has the minimum difference with the given ‘key’.

function findMinDiffElement(arr, key) {
  let minDiffNum = null
  let minDiffNow = Infinity

  let left = 0,
    right = arr.length - 1
  while (left <= right) {
    let middle = left + Math.floor((right - left) / 2)

    let diff = Math.abs(key - arr[middle])

    if (diff < minDiffNow) {
      minDiffNow = diff
      minDiffNum = arr[middle]
    }

    if (minDiffNow === 0) return minDiffNum

    if (key > arr[middle]) left++
    else right--
  }

  return minDiffNum
}

module.exports = {findMinDiffElement}
