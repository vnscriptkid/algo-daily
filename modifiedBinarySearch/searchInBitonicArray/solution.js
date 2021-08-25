function bst(arr, key, left, right) {
  const increasing = arr[left] < arr[right];
  let middle;
  while (left <= right) {
    middle = left + Math.floor((right - left) / 2);

    if (key === arr[middle]) return middle;

    if (increasing) {
      if (key > arr[middle]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    } else {
      if (key > arr[middle]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
  }

  return -1;
}

function findMax(arr, key) {
  let left = 0,
    right = arr.length - 1;
  let middle;

  while (left < right) {
    middle = left + Math.floor((right - left) / 2);

    if (arr[middle] > arr[middle + 1]) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }

  return left;
}

function search(arr, key) {
  // find max
  let maxIndex = findMax(arr, key);

  const leftResult = bst(arr, key, 0, maxIndex);

  if (leftResult !== -1) return leftResult;

  return bst(arr, key, maxIndex + 1, arr.length - 1);
}

module.exports = { search };
