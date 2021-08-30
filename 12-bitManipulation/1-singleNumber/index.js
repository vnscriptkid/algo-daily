// In a non-empty array of integers, every number appears twice except for one, find that single number.
// Input: 1, 4, 2, 1, 3, 2, 3
//        1 ^ 1 ^ 3 ^ 3 ^ 2 ^ 2 ^ 4
// set: 4
// Output: 4

function findSingleNumber(arr) {
  let result = 0

  for (let num of arr) {
    result = result ^ num
  }

  return result
}

module.exports = {findSingleNumber}
