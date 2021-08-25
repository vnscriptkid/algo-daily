function findMax(arr, key) {
  let left = 0,
    right = arr.length - 1;
  let middle;

  while (left < right) {
    middle = left + Math.floor((right - left) / 2);

    if (arr[middle] > arr[middle + 1]) return middle;

    if (arr[middle] === arr[left]) return middle + 1;
    else if (arr[middle] > arr[left]) {
      // max on the right
      left = middle;
    } else {
      // max on the left
      right = middle - 1;
    }
  }

  return right;
}

function bst(arr, key, left, right) {
  let middle;

  while (left <= right) {
    middle = left + Math.floor((right - left) / 2);

    if (key === arr[middle]) return middle;

    if (key > arr[middle]) left = middle + 1;
    else right = middle - 1;
  }

  return -1;
}

function search(arr, key) {
  const maxIndex = findMax(arr, key);

  let leftResult = bst(arr, key, 0, maxIndex);
  if (leftResult !== -1) return leftResult;
  return bst(arr, key, maxIndex);
}

module.exports = { search };
