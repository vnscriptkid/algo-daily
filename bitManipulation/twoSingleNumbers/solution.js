function findTwoSingleNumbers(arr) {
  // find xor of 2 single numbers
  let axorb = 0;
  for (let num of arr) {
    axorb = axorb ^ num;
  }

  // find the right most set bit of axb, at c position
  let c = 1;
  while ((c & axorb) === 0) {
    c = c << 1;
  }

  let [x, y] = [0, 0];
  // divide original arrays into 2 groups, xor all in one group
  for (let num of arr) {
    // one group has c-th position bit is 0
    if ((c & num) === 0) {
      x = x ^ num;
    }
    // one group has c-th position bit is 1
    else {
      y = y ^ num;
    }
  }

  // return final result of 2 groups
  return [x, y];
}

module.exports = { findTwoSingleNumbers };
