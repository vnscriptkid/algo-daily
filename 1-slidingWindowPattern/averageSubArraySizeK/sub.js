// [1, 3, 6, 2, 3, 4, 5, 3, 3, 4]
//     ^
// [3, 4]
// left = right = 0
// arr[left]

function contains(arr1, arr2) {
  let count = 0

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[0]) continue
    else {
      let j = 1
      let k = i + 1
      while (arr1[k] === arr2[j] && k < arr1.length && j < arr2.length) {
        k++
        j++
      }
      if (j === arr2.length) count++
    }
  }

  return count
}

console.log(contains([1, 3, 6, 2, 3, 4, 5, 3, 3, 4], [3, 4]))
