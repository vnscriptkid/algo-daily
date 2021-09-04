// Two Single Numbers
// In a non-empty array of numbers, every number appears exactly twice except two numbers that appear only once. Find the two numbers that appear only once.

function findTwoSingleNumbers(arr) {
  // xor all together to find axb
  let axb = 0

  for (let num of arr) {
    axb = axb ^ num
  }

  // we got axb now
  // a !== b, at least 1 bit different (bit 1)
  // find rightMostSetBit
  let c = 1
  while ((c & axb) === 0) {
    c = c << 1
  }

  // partition in 2 groups
  let [x, y] = [0, 0]

  for (let num of arr) {
    if ((c & num) === 0) {
      // bit is 0
      x = x ^ num
    } else {
      y = y ^ num
    }
  }

  return [x, y]
}

module.exports = {findTwoSingleNumbers}
