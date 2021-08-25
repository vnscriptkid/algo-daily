function findSingleNumber(arr) {
  let xor = 0

  for (let number of arr) {
    xor = xor ^ number
  }

  return xor
}

module.exports = {findSingleNumber}
