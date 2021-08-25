function removeDuplicates(arr) {
  let cur = 1,
    nextNonDuplicate = 1;

  while (cur < arr.length) {
    const lastNonDuplicateVal = arr[nextNonDuplicate - 1];
    if (arr[cur] !== lastNonDuplicateVal) {
      // expand non-duplicate part
      arr[nextNonDuplicate] = arr[cur];
      nextNonDuplicate++;
    }
    cur++;
  }

  arr.splice(nextNonDuplicate);
  return arr.length;
}

module.exports = { removeDuplicates };
