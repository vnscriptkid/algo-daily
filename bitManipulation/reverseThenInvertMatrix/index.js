function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function reverseThenInvert(matrix) {
  for (let row of matrix) {
    // reverse
    let left = 0,
      right = row.length - 1;
    while (left < right) {
      swap(row, left, right);
      row[left] ^= 1;
      row[right] ^= 1;
      left++;
      right--;
    }
    // left === right now
    if (left === right) {
      row[right] ^= 1;
    }
  }
}

module.exports = { reverseThenInvert };
