function findCasePermutations(str, cur = [], all = []) {
  if (cur.length === str.length) {
    all.push(cur.join(''))
    return
  }

  let curChar = str.charAt(cur.length)

  cur.push(curChar)
  findCasePermutations(str, cur, all)
  cur.pop()

  if (curChar.match(/[a-z]/)) {
    cur.push(curChar.toUpperCase())
    findCasePermutations(str, cur, all)
    cur.pop()
  }

  return all
}

module.exports = {findCasePermutations}
