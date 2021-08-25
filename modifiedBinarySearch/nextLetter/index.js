function findNextLetter(chars, key) {
  const n = chars.length;
  let left = 0,
    right = n - 1;

  if (key > chars[right]) return chars[0];

  let middle;

  while (left <= right) {
    middle = left + Math.floor((right - left) / 2);

    if (key === chars[middle]) return chars[(middle + 1) % n];

    if (key > chars[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  // now left > right
  return chars[(right + 1) % n];
}

module.exports = { findNextLetter };
