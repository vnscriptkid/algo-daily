// String Permutations by changing case
// Given a string, find all of its permutations preserving the character sequence but changing case.

// Input: "ab7c"
// Output: "ab7c", "Ab7c", "aB7c", "AB7c", "ab7C", "Ab7C", "aB7C", "AB7C"

//            [ab7c]
// a:     [ab7c     Ab7c]
// b: [ab7c, Ab7c, aB7c, AB7c]
// 7: []
// c:

function findCasePermutations(str) {
  const queue = [str]

  for (let i of Array(str.length).keys()) {
    let curChar = str.charAt(i)

    if (!curChar.match(/[a-z]/)) continue

    let queueSizeNow = queue.length

    for (let j = 0; j < queueSizeNow; j++) {
      let curPer = queue[j]
      let newPer =
        curPer.slice(0, i) + curChar.toUpperCase() + curPer.slice(i + 1)
      queue.push(newPer)
    }
  }

  return queue
}

module.exports = {findCasePermutations}
