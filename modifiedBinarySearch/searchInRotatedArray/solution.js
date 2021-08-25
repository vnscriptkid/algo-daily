function search(arr, key) {
  let left = 0,
    right = arr.length - 1;
  let middle;

  while (left <= right) {
    middle = left + Math.floor((right - left) / 2);

    if (arr[middle] === key) return middle;

    if (arr[left] <= arr[middle]) {
      // sorted part is on the right
      // arr[left] === arr[middle] when left === middle
      if (arr[left] <= key && key < arr[middle]) {
        // find on the left of middle
        right = middle - 1;
      } else left = middle + 1;
    } else {
      // sorted part is on the right
      if (arr[middle] < key && key <= arr[right]) {
        // find on the right
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }

  return -1;
}

module.exports = { search };
