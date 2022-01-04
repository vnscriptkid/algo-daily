// Comparing Strings containing Backspaces

// Given two strings containing backspaces (identified by the character ‘#’), check if the two strings are equal.

// abc##
//   ^

// Input: str1="xywrrmp", str2="xywrrmu#p"
// Output: true

// Input: str1="xp#", str2="xyz##"
// Output: true

function findNextIdx(str, idx) {
  if (str[idx] !== '#') return idx

  let count = 0
  while (idx >= 0 && str[idx] === '#') {
    count++
    idx--
  }

  while (count > 0) {
    idx--
    count--
  }

  return idx
}

function compareStrings(str1, str2) {
  let p1 = str1.length - 1,
    p2 = str2.length - 1

  while (p1 >= 0 && p2 >= 0) {
    p1 = findNextIdx(str1, p1)
    p2 = findNextIdx(str2, p2)

    if (str1[p1] !== str2[p2]) return false

    p1--
    p2--
  }

  return p1 < 0 && p2 < 0
}

module.exports = {compareStrings}
