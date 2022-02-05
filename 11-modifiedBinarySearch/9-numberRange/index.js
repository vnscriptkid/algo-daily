// Number Range

// Given an array of numbers sorted in ascending order, find the range of a given number ‘key’.
// The range of the ‘key’ will be the first and last position of the ‘key’ in the array.

// Write a function to return the range of the ‘key’. If the ‘key’ is not present return [-1, -1].

// Input: [4, 6, 6, 6, 9], key = 6
// Output: [1, 3]

// [4, 6, 6, 6, 9]
//  l     m     r

// Input: [1, 3, 8, 10, 15], key = 12
// Output: [-1, -1]

function findIdx(arr, key, findFirst) {
  let left = 0,
    right = arr.length - 1

  let foundIdx = -1

  while (left <= right) {
    let middle = Math.floor(left + (right - left) / 2)

    if (arr[middle] === key) {
      foundIdx = middle
      if (findFirst) {
        right = middle - 1
      } else {
        // findLast
        left = middle + 1
      }
    } else if (arr[middle] > key) {
      right = middle - 1
    } else {
      // arr[middle] < key
      left = middle + 1
    }
  }

  return foundIdx
}

function findNumberRange(arr, key) {
  let [first, last] = [-1, -1]

  first = findIdx(arr, key, true)
  last = findIdx(arr, key, false)

  return [first, last]
}

module.exports = {findNumberRange}
