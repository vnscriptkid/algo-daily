// Triplet Sum to Zero
// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

// Input: [-3, 0, 1, 2, -1, 1, -2]
// Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
// Explanation: There are four unique triplets whose sum is equal to zero.

function searchTriplets(arr = []) {
  const output = []

  arr.sort((a, b) => a - b)

  for (let i = 0; i < arr.length; i++) {
    let complement = 0 - arr[i]

    let left = i + 1,
      right = arr.length - 1

    while (left < right) {
      let curSum = arr[left] + arr[right]

      if (curSum === complement) {
        output.push([arr[i], arr[left], arr[right]])

        left++
        right--

        while (left < right && arr[left] === arr[left - 1]) left++
        while (left < right && arr[right] === arr[right + 1]) right--
      } else if (curSum < complement) left++
      else right--
    }
  }

  return output
}

module.exports = {searchTriplets}
