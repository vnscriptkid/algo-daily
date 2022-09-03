// We are given an array containing ‘n’ distinct numbers taken from the range 0 to ‘n’.
// Since the array has only ‘n’ numbers out of the total ‘n+1’ numbers, find the missing number.

//         0 1 2 3
// Input: [0,4,2,3] : n=4 => [0,1,2,3,4]
//                     ^
//                 ^
// Output: 3
// a[i] === i

function swap(arr, x, y) {
  ;[arr[x], arr[y]] = [arr[y], arr[x]]
}

function findMissingNumber(arr) {
  // bring numbers to its correct position
  let i = 0
  while (i < arr.length) {
    if (arr[i] === i || arr[i] === arr.length) i++
    else swap(arr, i, arr[i])
  }

  // find the missing one
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== i) return i
  }

  return arr.length
}

module.exports = {findMissingNumber}
