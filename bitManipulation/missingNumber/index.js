function findMissingNumber(arr) {
  const n = arr.length + 1;

  // xor all numbers from 1 to n
  let x = 1;
  for (let i = 2; i <= n; i++) {
    x = x ^ i;
  }

  // xor all numbers in arr
  let y = arr[0];
  for (let i = 1; i < arr.length; i++) {
    y = y ^ arr[i];
  }

  return x ^ y;
}

module.exports = { findMissingNumber };
