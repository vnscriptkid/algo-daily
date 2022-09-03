// Comparing Strings containing Backspaces

// Given two strings containing backspaces (identified by the character ‘#’), check if the two strings are equal.

// abc##
//   ^

// Input: str1="xywrrmp", str2="xywrrmu#p"
// Output: true

// Input: str1="xp#", str2="xyz##"
// Output: true

// compare one char in str1 and one corresponding char in str2
// ignore # and deleted chars

// backSpacesCount = 0
// str1="x p #"
//       ^

// backSpacesCount = 0
// str2="x y z # #"
//       $

// x #
// ^
function findNextIdx(str, curIdx, backSpacesCount = 0) {
  if (curIdx === -1) return -1

  let curChar = str[curIdx]
  let isBackspace = curChar === '#'

  // 2. backspace #
  if (isBackspace) return findNextIdx(str, curIdx - 1, backSpacesCount + 1)

  // 1. alphabet char
  //   1.2. non-deleted char (backSpacesCount === 0)
  if (backSpacesCount === 0) return curIdx

  //   1.1. deleted char (backSpacesCount > 0)
  return findNextIdx(str, curIdx - 1, backSpacesCount - 1)
}

function compareStrings(str1, str2) {
  let p1 = str1.length - 1,
    p2 = str2.length - 1

  while (p1 >= 0 && p2 >= 0) {
    // find next chars that are not # and not deleted chars
    p1 = findNextIdx(str1, p1)
    p2 = findNextIdx(str2, p2)

    if (p1 < 0 || p2 < 0) break

    if (str1[p1] !== str2[p2]) return false

    p1--
    p2--
  }

  return p1 === -1 && p2 === -1
}

module.exports = {compareStrings}
