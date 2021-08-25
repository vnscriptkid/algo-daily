function findComplement(num) {
  // x ^ complement === allBitSet
  // x ^ x ^ complement === allBitSet ^ x
  // complement = allBitSet ^ x
  let binaryLength = 0;
  let n = num;

  while (n > 0) {
    binaryLength++;
    n = n >> 1;
  }

  let allBitSet = Math.pow(2, binaryLength) - 1;
  return allBitSet ^ num;
}

module.exports = { findComplement };
