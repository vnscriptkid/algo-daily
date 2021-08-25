function findMinDiffElement(arr, key) {
  let curMinDiff = Infinity;
  let result = arr[0];

  let left = 0,
    right = arr.length - 1;
  let middle;

  while (left <= right) {
    middle = left + Math.floor((right - left) / 2);

    if (key === arr[middle]) return arr[middle];

    let curDiff = Math.abs(arr[middle] - key);

    if (curDiff < curMinDiff) {
      curMinDiff = curDiff;
      result = arr[middle];
    }

    if (key > arr[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return result;
}

module.exports = { findMinDiffElement };
