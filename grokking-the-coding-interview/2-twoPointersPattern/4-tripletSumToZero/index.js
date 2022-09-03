// Triplet Sum to Zero
// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

// Input: [-3, 0, 1, 2, -1, 1, -2]

// [-3, -2, -1, 0, 1, 1, 1, x, y, z, 2, 2, 2]
//       ^
//                       $           #

// [-3, 1, 2]

// Output:[ [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]
// Explanation: There are four unique triplets whose sum is equal to zero.

function searchTriplets(arr = []) {
  // sort arr
  arr.sort((a, b) => a - b)

  const output = []

  // fix one number
  for (let i = 0; i < arr.length; i++) {
    let curNum = arr[i]
    let complement = -curNum

    let left = i + 1,
      right = arr.length - 1

    // find the pair from remaining space that add to complement of fixed number
    while (left < right) {
      let curSum = arr[left] + arr[right]

      if (curSum === complement) {
        output.push([curNum, arr[left], arr[right]])

        left++
        right--

        while (arr[left] === arr[left - 1]) left++
        while (arr[right] === arr[right + 1]) right--
      } else if (curSum < complement) left++
      else right--
    }
  }

  return output
}

module.exports = {searchTriplets}
