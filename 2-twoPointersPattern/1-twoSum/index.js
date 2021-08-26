// Pair with Target Sum
// sorted arr
// 1, 2, 3, 4, 6 | target = 6
//    ^     $
// 2 + 4 = 6
// [1, 3]

// 2, 5, 9, 11 | target = 12
//    ^$
// 5 + 9 = 14
// [-1, -1]

function twoSum(arr, target) {
  let left = 0,
    right = arr.length - 1

  while (left < right) {
    let curSum = arr[left] + arr[right]

    if (curSum === target) return [left, right]
    else if (curSum < target) left++
    else right--
  }

  return [-1, -1]
}

module.exports = {twoSum}
