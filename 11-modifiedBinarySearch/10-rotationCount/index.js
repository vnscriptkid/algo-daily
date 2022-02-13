// Search in Rotated Array (medium) #
// Given an array of numbers which is sorted in ascending order and also rotated by some arbitrary number,
// find if a given ‘key’ is present in it.

// Write a function to return the index of the ‘key’ in the rotated array. If the ‘key’ is not present, return -1.
// You can assume that the given array does not have any duplicates.

// Example 1:
// Input: [10, 15, 1, 3, 8], key = 15
// Output: 1
// Explanation: '15' is present in the array at index '1'.

// Example 2:
// Input: [4, 5, 7, 9, 10, -1, 2], key = 10
// Output: 4
// Explanation: '10' is present in the array at index '4'.

function countRotations(arr) {
  // find idx of smallest number
  let left = 0,
    right = arr.length - 1
  while (left < right) {
    let middle = left + Math.floor((right - left) / 2)

    if (middle - 1 >= left && arr[middle - 1] > arr[middle]) return middle
    if (middle + 1 <= right && arr[middle] > arr[middle + 1]) return middle + 1

    if (arr[left] <= arr[middle]) left = middle + 1
    else right = middle - 1
  }

  return 0
}

module.exports = {countRotations}
