// String Permutations by changing case
// Given a string, find all of its permutations preserving the character sequence but changing case.

// Input: "ab7c"
// Output: "ab7c", "Ab7c", "aB7c", "AB7c", "ab7C", "Ab7C", "aB7C", "AB7C"

//       [ab7c]

//  [ab7c       Ab7c]

// [ab7c  Ab7c aB7c AB7c]

// [ab7c  Ab7c aB7c AB7c]

// [ab7c  Ab7c aB7c AB7c ab7C Ab7C aB7C AB7C]

function findCasePermutations(str) {
  const queue = [str]

  for (let i of Array(str.length).keys()) {
    let curChar = str.charAt(i)

    if (!curChar.match(/[a-z]/)) continue

    let queueSize = queue.length
    let j = 0
    while (j < queueSize) {
      let curPer = queue[j]
      let newPer =
        curPer.slice(0, i) + curChar.toUpperCase() + curPer.slice(i + 1)
      queue.push(newPer)
      j++
    }
  }

  return queue
}

module.exports = {findCasePermutations}
