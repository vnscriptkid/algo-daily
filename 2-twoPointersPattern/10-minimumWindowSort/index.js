// Min Window Sort

// Given an array, find the length of the smallest subarray in it which when sorted will sort the whole array.

// Input: [1, 2, 5, 3, 7, 10, 9, 12]
// Output: 5
// Explanation: We need to sort only the subarray [5, 3, 7, 10, 9] to make the whole array sorted

// [1, 2, 5, 3, 7, 10, 9, 12]
//        ^            $

// [1, 2, 3, 5, 7, 9. 10, 12]
//        ^            $

/*********** */

// Input: [1, 3, 2, 0, -1, 7, 10]
// Output: 5
// Explanation: We need to sort only the subarray [1, 3, 2, 0, -1] to make the whole array sorted

// [1, 3, 2, 0, -1, 7, 10]
//     l         h

// max
// min

// [1, -1, 0, 2, 3, 7, 10]
//     ^         $

function findSmallestWindow(arr) {
  // go from the left, find the first out-of-order number (low)
  let low = 0
  while (low + 1 < arr.length && arr[low] < arr[low + 1]) {
    low++
  }

  // go from the right, find the first out-of-order number (high)
  let high = arr.length - 1
  while (high - 1 >= 0 && arr[high - 1] < arr[high]) {
    high--
  }

  // 1 2 3 4 5 6 7
  if (low >= high) return 0

  // find max, min between low and high idx
  let min = Infinity
  let max = -Infinity
  for (let i = low; i <= high; i++) {
    min = Math.min(min, arr[i])
    max = Math.max(max, arr[i])
  }

  let smallestWindow = high - low + 1

  // go from low - 1, all the way to the left
  // a b c | x y z | d e f
  let cur = low - 1
  // include number greater than min
  // stop when curNum < min
  while (cur >= 0 && arr[cur] > min) {
    smallestWindow++
    cur--
  }

  cur = high + 1
  while (cur < arr.length && arr[cur] < max) {
    smallestWindow++
    cur++
  }
  // go from high + 1, all the way to the right
  // include number less than max
  // stop when curNum > max

  return smallestWindow
}

module.exports = {findSmallestWindow}
