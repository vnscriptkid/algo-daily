function searchTriplets(arr, target) {
  arr.sort((a, b) => a - b);
  let closetSum = 0,
    bestDiff = Infinity;
  for (let i = 0; i < arr.length; i++) {
    let left = i + 1,
      right = arr.length - 1;
    while (left < right) {
      const curSum = arr[i] + arr[left] + arr[right];
      const curDiff = Math.abs(curSum - target);

      if (curDiff === 0) return target;

      if (curDiff < bestDiff) {
        closetSum = curSum;
        bestDiff = curDiff;
      }

      if (curSum < target) left++;
      else right--;
    }
  }
  return closetSum;
}

module.exports = { searchTriplets };
