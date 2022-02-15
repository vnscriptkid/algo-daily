// Rotation Count (medium) #
// Given an array of numbers which is sorted in ascending order and is rotated ‘k’ times around a pivot, find ‘k’.

// You can assume that the array does not have any duplicates.

// Example 1:
//         10 15 1 3 8
// Input: [10, 15, 1, 3, 8]
// Output: 2
// Explanation: The array has been rotated 2 times.

// Example 2:
// Input: [4, 5, 7, 9, 10, -1, 2]
// Output: 5
// Explanation: The array has been rotated 5 times.

function countRotations(arr) {
  let left = 0,
    right = arr.length - 1

  // searching for idx for minimum number
  while (left <= right) {
    let middle = Math.floor(left + (right - left) / 2)

    if (middle - 1 >= 0 && arr[middle] < arr[middle - 1]) return middle

    if (middle + 1 < arr.length && arr[middle] > arr[middle + 1])
      return middle + 1

    // middle is in green or red?
    if (arr[middle] >= arr[left]) {
      // red portion
      left = middle + 2
    } else {
      // green portion
      right = middle - 1
    }
  }

  return 0
}

module.exports = {countRotations}
