// Complement of Base 10 Number

// Every non-negative integer N has a binary representation, for example, 8 can be represented as “1000” in binary and 7 as “0111” in binary.

// The complement of a binary representation is the number in binary that we get when we change every 1 to a 0 and every 0 to a 1. For example, the binary complement of “1010” is “0101”.

// For a given positive number N in base-10, return the complement of its binary representation as a base-10 integer.

// Input: 10
// Output: 5
// Explanation: 10 is 1010 in binary, its complement is 0101 in binary, which is 5 in base-10.

// num ^ complement = allBitsSet
// num ^ num ^ complement = allBitsSet ^ num

// 1010 ^ 0101 = 1111
// 10 is 1010 => 1111 => 2^4 - 1

function findComplement(num) {
  // comlement = allBitsSet ^ num
  const allBitsSet = Math.pow(2, num.toString(2).length) - 1

  return allBitsSet ^ num
}

module.exports = {findComplement}
