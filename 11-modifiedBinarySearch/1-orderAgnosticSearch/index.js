// Order-agnostic Binary Search (easy)
// Given a sorted array of numbers, find if a given number ‘key’ is present in the array.
// we don’t know if it’s sorted in ascending or descending order. array can have duplicates.
// [1, 2, 3, 4, 5, 6, 7], key = 5
//           @  ^     $
// [10, 6, 4], key = 10

function search(arr, target) {
  const isAscending = arr[0] < arr[arr.length - 1]

  let left = 0,
    right = arr.length - 1

  while (left <= right) {
    // let middle = (left + right) / 2;
    let middle = left + (right - left) / 2

    if (target === arr[middle]) return middle

    if (isAscending) {
      if (target > arr[middle]) {
        left = middle + 1
      } else {
        right = middle - 1
      }
    } else {
      if (target > arr[middle]) {
        right = middle - 1
      } else {
        left = middle + 1
      }
    }
  }

  return -1
}

module.exports = {search}
