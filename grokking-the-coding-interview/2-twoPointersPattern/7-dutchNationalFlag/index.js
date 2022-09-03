// Dutch National Flag Problem

// Given an array containing 0s, 1s and 2s, sort the array in-place.
// You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.

// The flag of the Netherlands consists of three colors: red, white and blue;
// and since our input array also consists of three different numbers that is why it is called Dutch National Flag problem.

// Input: [0, 0, 1, 2, 2, 2]
//              ^$
//                  @
// Output: [0 0 1 2 2 2 ]
//              ^$

function swap(arr, idx1, idx2) {
  ;[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

function dutchFlag(arr) {
  let left = 0,
    right = arr.length - 1

  let cur = 0
  while (cur <= right) {
    if (arr[cur] === 0) {
      swap(arr, cur, left)
      left++
      if (left > cur) cur = left
    } else if (arr[cur] === 1) {
      cur++
    } else {
      // cur num is 2
      swap(arr, cur, right)
      right--
    }
  }
}

// const arr = [0, 2, 0, 1, 2, 2]
//                 ^        $
//                 @
// dutchFlag(arr)

module.exports = {dutchFlag}
