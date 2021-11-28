// Dutch National Flag Problem

// Given an array containing 0s, 1s and 2s, sort the array in-place.
// You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.

// The flag of the Netherlands consists of three colors: red, white and blue;
// and since our input array also consists of three different numbers that is why it is called Dutch National Flag problem.

// Input: [2, 2, 0, 1, 2, 0]
// Output: [0 0 1 2 2 2 ]

// Input: [0, 0, 1, 2, 2, 2]
//               ^$
// Output: [0  0  1  2  2  2 ]
//                ^$

function swap(arr, i, j) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

function dutchFlag(arr) {
  let left = 0,
    right = arr.length - 1

  let curIdx = 0

  while (curIdx <= right) {
    let cur = arr[curIdx]
    if (cur === 0) {
      swap(arr, curIdx, left)
      curIdx++
      left++
    } else if (cur === 1) {
      curIdx++
    } else {
      swap(arr, curIdx, right)
      right--
    }
  }
}

module.exports = {dutchFlag}
