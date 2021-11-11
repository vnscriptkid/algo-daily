function getFirstTwoDiffChars(word1, word2) {
  let i = 0

  while (i < word1.length && i < word2.length) {
    if (word1[i] !== word2[i]) return [word1[i], word2[i]]
    i++
  }

  return [null, null]
}

function findCorrectOrder(words) {
  // compare 2 words that is next to each other
  // build a graph of characters
  // build a map of incommings
  const graph = new Map()
  const incommings = new Map()

  for (let word of words) {
    for (let char of word) {
      if (!graph.has(char)) graph.set(char, [])
      if (!incommings.has(char)) incommings.set(char, 0)
    }
  }

  for (let i = 1; i < words.length; i++) {
    let prevWord = words[i - 1]
    let curWord = words[i]
    const [prevChar, nextChar] = getFirstTwoDiffChars(prevWord, curWord)

    if (prevChar === null) continue

    graph.get(prevChar).push(nextChar)

    incommings.set(nextChar, incommings.get(nextChar) + 1)
  }

  let sortedOrder = ''
  const sources = [] // queue

  for (let [destChar, numOfDeps] of incommings.entries()) {
    if (numOfDeps === 0) sources.push(destChar)
  }

  while (sources.length) {
    // take one char out
    const charOut = sources.shift()
    // add to sortedOrder
    sortedOrder += charOut
    // update incommings, add new char to sources if possible
    for (let destChar of graph.get(charOut)) {
      incommings.set(destChar, incommings.get(destChar) - 1)

      if (incommings.get(destChar) === 0) sources.push(destChar)
    }
  }

  return sortedOrder
}

module.exports = {findCorrectOrder}
