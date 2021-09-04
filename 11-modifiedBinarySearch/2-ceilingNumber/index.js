// Ceiling of a Number
// Given an array of numbers sorted in an ascending order, find the ceiling of a given number ‘key’. The ceiling of the ‘key’ will be the smallest element in the given array greater than or equal to the ‘key’.

// [1, 3, 8, 10, 15], key = 12
//               lr
//
// l: 4
// r: 3
// m: 4

//   x  y
//   l  r
// r m
// key > x => l = m + 1 => l===r
// key < x => r = m - 1 => STOP: l

//    x   y   z
//       lmr
// key > y => l = m + 1 => STOP: l
// key < y => r = m - 1 => STOP: l

function findCeilingNumber(arr, key) {
  let left = 0,
    right = arr.length - 1

  let middle

  while (left <= right) {
    middle = left + Math.floor((right - left) / 2)

    if (key === arr[middle]) return middle

    if (key > arr[middle]) left = middle + 1
    else right = middle - 1
  }

  if (key < arr[middle]) return middle

  return middle + 1 < arr.length ? middle + 1 : -1
}

module.exports = {findCeilingNumber}
