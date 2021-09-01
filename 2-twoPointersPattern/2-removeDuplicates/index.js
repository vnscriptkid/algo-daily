// Given an array of sorted numbers, remove all duplicates from it.
// You should not use any extra space; after removing the duplicates in-place return the new length of the array.
// [2, 3, 6, 9, 3, 6, 9, 9]
//                           ^
//              $
// [2, 3, 6, 9]
// Output: 4

function removeDuplicates(arr) {
  let cur = 1
  let nextNonDuplicate = 1

  while (cur < arr.length) {
    if (arr[cur] !== arr[nextNonDuplicate - 1]) {
      arr[nextNonDuplicate] = arr[cur]
      nextNonDuplicate++
    }
    cur++
  }

  return nextNonDuplicate
}

module.exports = {removeDuplicates}
