// Bitonic Array Maximum

// Find the maximum value in a given Bitonic array.
// An array is considered bitonic if it is monotonically increasing and then monotonically decreasing.
// Monotonically increasing or decreasing means that for any index i in the array arr[i] != arr[i+1].

// Input: [1, 3, 8, 12, 4, 2]
// Output: 12
// Explanation: The maximum number in the input bitonic array is '12'.

//  0  1  2  3   4  5
// [1, 3, 8, 12, 4, 2]
// {      ^         }

// case 1: middle in increasing part: arr[middle] < arr[middle + 1] => max on the right of middle (exlusive)
// case 2: middle in decreasing part: arr[middle] > arr[middle + 1] => max on the left of the middle (inclusive)

function findMaxInBitonicArr(arr) {
  let left = 0,
    right = arr.length - 1

  while (left < right) {
    let middle = Math.floor(left + (right - left) / 2)

    if (arr[middle] < arr[middle + 1]) {
      left = middle + 1
    } else {
      // arr[middle] > arr[middle + 1]
      right = middle
    }
  }

  return arr[left]
}

module.exports = {findMaxInBitonicArr}
