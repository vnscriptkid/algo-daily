function findRangeBound(arr, key, findLeftBound) {
  let result = -1;
  let left = 0,
    right = arr.length - 1;
  let middle;

  while (left <= right) {
    middle = left + Math.floor((right - left) / 2);
    if (key === arr[middle]) {
      result = middle;
      if (findLeftBound) {
        // continue searching for lower index
        right = middle - 1;
      } else {
        // continue searching for higher index
        left = middle + 1;
      }
    } else if (key > arr[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return result;
}

function findNumberRange(arr, key) {
  let [leftBound, rightBound] = [-1, -1];

  leftBound = findRangeBound(arr, key, true);
  rightBound = findRangeBound(arr, key, false);

  return [leftBound, rightBound];
}

module.exports = { findNumberRange };
