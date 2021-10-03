// String Permutations by changing case
// Given a string, find all of its permutations preserving the character sequence but changing case.

// Input: "ab7c"
// Output: "ab7c", "Ab7c", "aB7c", "AB7c", "ab7C", "Ab7C", "aB7C", "AB7C"

//             ''
// a:      a           A

// b:   ab    aB    Ab    AB

// 7    ab7   aB7   Ab7   AB7

// c   ab7c  ab7C   aB7c   aB7C    Ab7c     Ab7C    AB7c    AB7C

function findCasePermutations(str, curPer = '', all = []) {
  if (curPer.length === str.length) {
    // we're done
    all.push(curPer)
    return
  }

  let curChar = str.charAt(curPer.length)

  // case 1: number
  // case 2: char
  const choices = []
  choices.push(curChar)
  if (curChar.match(/[a-z]/)) {
    choices.push(curChar.toUpperCase())
  }

  for (let choice of choices) {
    curPer += choice
    findCasePermutations(str, curPer, all)
    curPer = curPer.slice(0, curPer.length - 1)
  }

  return all
}

module.exports = {findCasePermutations}
