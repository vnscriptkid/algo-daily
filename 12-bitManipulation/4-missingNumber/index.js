function findMissingNumber(arr) {
  let x1 = 0
  for (let num of arr) {
    x1 = x1 ^ num
  }

  let x2 = 0
  for (let i = 1; i <= arr.length + 1; i++) {
    x2 = x2 ^ i
  }

  return x1 ^ x2
}

module.exports = {findMissingNumber}
