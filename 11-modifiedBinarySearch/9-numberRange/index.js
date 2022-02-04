// Number Range

// Given an array of numbers sorted in ascending order, find the range of a given number ‘key’.
// The range of the ‘key’ will be the first and last position of the ‘key’ in the array.

// Write a function to return the range of the ‘key’. If the ‘key’ is not present return [-1, -1].

// Input: [4, 6, 6, 6, 9], key = 6
// Output: [1, 3]

// Input: [1, 3, 8, 10, 15], key = 12
// Output: [-1, -1]

function findLastKey(arr, key, leftMost) {
  let finalIdx = -1

  let left = 0,
    right = arr.length - 1

  while (left <= right) {
    let middle = Math.floor(left + (right - left) / 2)

    if (arr[middle] === key) {
      finalIdx = middle

      if (leftMost) {
        right = middle - 1
      } else {
        // rightMost
        left = middle + 1
      }
    } else if (key > arr[middle]) {
      left = middle + 1
    } else {
      // key < arr[middle]
      right = middle - 1
    }
  }

  return finalIdx
}

function findNumberRange(arr, key) {
  let [left, right] = [-1, -1]

  left = findLastKey(arr, key, true)
  right = findLastKey(arr, key, false)

  return [left, right]
}

module.exports = {findNumberRange}
