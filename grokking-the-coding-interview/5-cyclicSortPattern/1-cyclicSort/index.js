// Given an unsorted array containing n distinct numbers taken from 1, 2, …, n
// Sort the array in-place

// 0  1  2  3  4
// 1, 2, 3, 4, 5
//               ^

function swap(arr, x, y) {
  ;[arr[y], arr[x]] = [arr[x], arr[y]]
}

function sort(arr) {
  let i = 0
  while (i < arr.length) {
    if (arr[i] === i + 1) {
      // i'm at correct position
      i++
    } else {
      swap(arr, i, arr[i] - 1)
    }
  }
}

module.exports = {sort}
