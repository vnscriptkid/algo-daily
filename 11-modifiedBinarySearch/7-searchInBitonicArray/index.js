// Given a Bitonic array, find if a given ‘key’ is present in it.
// An array is considered bitonic if it is monotonically increasing and then monotonically decreasing.
// Monotonically increasing or decreasing means that for any index i in the array arr[i] != arr[i+1].

// Write a function to return the index of the ‘key’. If the ‘key’ is not present, return -1.
// Input: [1, 3, 8, 4, 3], key=4
//         l  m  r

function binary(arr, target, left, right, increasing = true) {
  while (left <= right) {
    let middle = Math.floor(left + (right - left) / 2)

    if (arr[middle] === target) return middle

    if (increasing) {
      if (target > arr[middle]) left = middle + 1
      else right = middle - 1
    } else {
      if (target > arr[middle]) right = middle - 1
      else left = middle + 1
    }
  }
  return -1
}

function search(arr, key) {
  // find max position
  let left = 0,
    right = arr.length - 1
  while (left < right) {
    let middle = Math.floor(left + (right - left) / 2)

    if (arr[middle] < arr[middle + 1]) {
      // max is on the right (exclusive)
      left = middle + 1
    } else {
      // max is on the left (inclusive)
      right = middle
    }
  }

  const maxIdx = left

  // search on left
  const leftResult = binary(arr, key, 0, maxIdx)

  if (leftResult !== -1) return leftResult

  // search on right
  return binary(arr, key, maxIdx, arr.length - 1, false)
}

module.exports = {search}
