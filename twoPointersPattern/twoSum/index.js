function twoSum(arr, target) {
  // init 2 pointers from 2 ends of array
  let left = 0,
    right = arr.length - 1

  // check current sum, move either left or right accordingly
  while (left < right) {
    const sum = arr[left] + arr[right]
    if (sum === target) return [left, right]
    else if (sum < target) left++
    else right--
  }

  return [-1, -1]
}

module.exports = {twoSum}
