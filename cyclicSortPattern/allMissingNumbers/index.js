function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function findAllMissingNumbers(arr) {
  const missingNumbers = [];

  // run through all elements
  let i = 0,
    j;
  while (i < arr.length) {
    // if current is not at its correct position and there's not a duplicated number at its correct position => swap
    j = arr[i] - 1;
    if (arr[i] !== arr[j]) {
      swap(arr, i, j);
    } else {
      // move pointer forward until current number is at its correct position
      i++;
    }
  }

  // do a second loop, move all items not matching up with their indices to result
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) missingNumbers.push(i + 1);
  }

  return missingNumbers;
}

module.exports = { findAllMissingNumbers };
