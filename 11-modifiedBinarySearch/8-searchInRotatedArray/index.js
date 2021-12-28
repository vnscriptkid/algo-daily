// Search in Rotated Array

// Given an array of numbers which is sorted in ascending order and also rotated by some arbitrary number, find if a given ‘key’ is present in it.

// Write a function to return the index of the ‘key’ in the rotated array.
// If the ‘key’ is not present, return -1. You can assume that the given array does not have any duplicates.

// Input: [10, 15, 1, 3, 8], key = 15
// Output: 1
// Explanation: '15' is present in the array at index '1'.

function search(arr, key) {
  // find largest first
  let left = 0,
    right = arr.length - 1

  while (left <= right) {
    let middle = Math.floor(left + (right - left) / 2)

    if (arr[middle] === key) return middle

    if (arr[left] <= arr[middle]) {
      if (key >= arr[left] && key <= arr[middle]) {
        right = middle - 1
      } else {
        left = middle + 1
      }
    } else {
      // arr[middle] <= arr[right]
      if (key >= arr[middle] && key <= arr[right]) {
        left = middle + 1
      } else {
        right = middle - 1
      }
    }
  }

  return null
}

module.exports = {search}
