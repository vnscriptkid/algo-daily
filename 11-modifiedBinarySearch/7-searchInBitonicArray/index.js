// Search Bitonic Array

// Given a Bitonic array, find if a given ‘key’ is present in it.
// An array is considered bitonic if it is monotonically increasing and then monotonically decreasing.
// Monotonically increasing or decreasing means that for any index i in the array arr[i] != arr[i+1].

// Write a function to return the index of the ‘key’. If the ‘key’ is not present, return -1.

// Input: [1, 3, 8, 4, 3], key=4

// 0 1 2 3 4 5 6 7 8
// 1 2 4 5 7 8 9 6 3
//            lr
//

function binarySearch(arr, key, fromIdx, toIdx, increasing) {
  let left = fromIdx,
    right = toIdx
  while (left <= right) {
    let middle = Math.floor(left + (right - left) / 2)

    if (key === arr[middle]) return middle

    if (increasing) {
      if (key > arr[middle]) left = middle + 1
      else right = middle - 1
    } else {
      // decreasing
      if (key > arr[middle]) right = middle - 1
      else left = middle + 1
    }
  }

  return -1
}

function search(arr, key) {
  // find the max (the boundary btw increasing and decreasing portions)
  let left = 0,
    right = arr.length - 1
  while (left < right) {
    let middle = Math.floor(left + (right - left) / 2)

    if (arr[middle] < arr[middle + 1]) {
      left = middle + 1
    } else {
      right = middle
    }
  }

  let maxIdx = left

  let result = binarySearch(arr, key, 0, maxIdx, true)

  return result !== -1
    ? result
    : binarySearch(arr, key, maxIdx, arr.length - 1, false)
}

module.exports = {search}
