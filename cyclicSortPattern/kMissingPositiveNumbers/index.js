function findKmissingPositiveNumbers(arr, k) {
  const missingNumbers = [];
  // loop all numbers, put it back to correct position if within range
  const n = arr.length;
  let i = 0;
  while (i < n) {
    const j = arr[i] - 1;
    if (arr[i] > 0 && arr[i] <= n && arr[i] !== arr[j])
      [arr[j], arr[i]] = [arr[i], arr[j]];
    else i++;
  }

  // loop again, add numbers that do not match index to output, up to k
  i = 0;
  const extraNumbers = new Set();
  while (missingNumbers.length < k && i < n) {
    if (arr[i] !== i + 1) {
      missingNumbers.push(i + 1);
      extraNumbers.add(arr[i]);
    }
    i++;
  }

  i = 1;
  while (missingNumbers.length < k) {
    const candidate = n + i;
    if (!extraNumbers.has(candidate)) {
      missingNumbers.push(candidate);
    }
    i++;
  }

  return missingNumbers;
}

module.exports = { findKmissingPositiveNumbers };
