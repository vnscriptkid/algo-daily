// Ceiling of a Number
// Given an array of numbers sorted in an ascending order, find the ceiling of a given number ‘key’.
// The ceiling of the ‘key’ will be the smallest element in the given array greater than or equal to the ‘key’.

// [1, 3, 8, 10, 15], key = 20
//
// return -1

// [1, 3, 8, 10, 15], key = 12
//
//           r   ml

// l: 4
// r: 3
// m: 4

// [1, 3, 8, 10, 15], key = 12
//
//

function findCeilingNumber(arr, key) {
  if (key > arr[arr.length - 1]) return -1

  let left = 0,
    right = arr.length - 1

  while (left <= right) {
    let middle = Math.floor(left + (right - left) / 2)

    if (key === arr[middle]) return middle

    if (key > arr[middle]) left = middle + 1
    else right = middle - 1
  }

  return left
}

module.exports = {findCeilingNumber}
