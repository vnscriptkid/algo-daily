// Minimum Difference Element

// Given an array of numbers sorted in ascending order,
// find the element in the array that has the minimum difference with the given ‘key’.

// Input: [1, 3, 8, 10, 15], key = 12
//                   r   lm
// Output: 10

function findMinDiffElement(arr, key) {
  let left = 0,
    right = arr.length - 1

  while (left <= right) {
    let middle = left + Math.floor((right - left) / 2)

    if (key === arr[middle]) return arr[middle]

    if (key > arr[middle]) left = middle + 1
    else right = middle - 1
  }

  return Math.abs(key - arr[left]) < Math.abs(key - arr[right])
    ? arr[left]
    : arr[right]
}

module.exports = {findMinDiffElement}
