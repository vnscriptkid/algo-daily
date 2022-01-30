// Comparing Strings containing Backspaces

// Given two strings containing backspaces (identified by the character ‘#’), check if the two strings are equal.

// abc##
//   ^

// Input: str1="xywrrmp", str2="xywrrmu#p"
// Output: true

// Input: str1="xp#", str2="xyz##"
// Output: true

function findNextIdx(str, curIdx, backspaces = 0) {
  if (curIdx === -1) return -1

  const isAlphabet = str[curIdx].match(/[a-z]/i)

  // _ _ _ a | backspaces === 0
  //       ^
  // return a
  if (isAlphabet && backspaces === 0) return curIdx

  // _ _ _ # | backspaces = x
  //       ^
  // move on, backspaces += 1

  // _ _ _ a | backspaces === x (> 0)
  //       ^
  // move on, backspaces -= 1

  return findNextIdx(
    str,
    curIdx - 1,
    isAlphabet ? backspaces - 1 : backspaces + 1,
  )
}

function compareStrings(str1, str2) {
  let p1 = str1.length - 1,
    p2 = str2.length - 1

  while (p1 >= 0 && p2 >= 0) {
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
