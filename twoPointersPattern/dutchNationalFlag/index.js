function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function dutchFlag(arr) {
  const n = arr.length;
  let cur = 0,
    left = 0,
    right = n - 1;

  while (cur <= right) {
    if (arr[cur] === 0) {
      swap(arr, cur, left);
      left++;
      cur++;
    } else if (arr[cur] === 2) {
      swap(arr, cur, right);
      right--;
    } else {
      cur++;
    }
  }
}

module.exports = { dutchFlag };
