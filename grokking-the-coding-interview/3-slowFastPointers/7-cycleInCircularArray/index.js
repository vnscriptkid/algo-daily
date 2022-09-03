// Cycle in a Circular Array
// We are given an array containing positive and negative numbers.
// Suppose the array contains a number ‘M’ at a particular index.
// Now, if ‘M’ is positive we will move forward ‘M’ indices and if ‘M’ is negative move backwards ‘M’ indices.
// You should assume that the array is circular which means two things:

// (1) If, while moving forward, we reach the end of the array, we will jump to the first element to continue the movement.
// If, while moving backward, we reach the beginning of the array, we will jump to the last element to continue the movement.

// Write a method to determine if the array has a cycle.
// (2) The cycle should have more than one element and
// (3) should follow one direction which means the cycle should not contain both forward and backward movements.

//         0  1   2  3  4
// Input: [1, 2, -1, 2, 2]  (3 + 2 = 5 % 5 = 0)
//                   ^
//         $
// Output: true
// Explanation: The array has a cycle among indices: 0 -> 1 -> 3 -> 0

// Input: [2, 2, -1, 2]
// Output: true
// Explanation: The array has a cycle among indices: 1 -> 3 -> 1

// Input: [2, 1, -1, -2]
// Output: false
// Explanation: The array does not have any cycle.

//  0  1   2
// [1, 3, -1]

function isCircular(arr) {
  function nextOf(idx, isForward) {
    let nextIdx = (idx + arr[idx]) % arr.length

    if (nextIdx === idx) return -1

    let isNowForward = arr[nextIdx] > 0

    if (isForward !== isNowForward) return -1

    return nextIdx
  }

  for (let i = 0; i < arr.length; i++) {
    // must check if there is a cycle starting at every number (loop)

    let slow = i,
      fast = i
    let isForward = arr[i] > 0

    while (true) {
      slow = nextOf(slow, isForward)
      fast = nextOf(fast, isForward)

      if (fast === -1) break

      fast = nextOf(fast, isForward)

      if (fast === -1) break

      if (slow === fast) return true
    }
  }
  // at least 1 => true
  // no cycle starting at current number (keep checking)

  // return false
  return false
}

module.exports = {isCircular}
