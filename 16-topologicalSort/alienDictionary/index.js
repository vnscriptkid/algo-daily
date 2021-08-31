const Queue = require('collections/deque')

function compareWords(word1, word2) {
  let i = 0
  while (word1[i] === word2[i]) i++
  return [word1[i], word2[i]]
}

function findCorrectOrder(words) {
  // build the graph, indegrees
  const graph = new Map()
  const indegrees = {}
  for (let [index, curWord] of words.entries()) {
    // skip the last one
    if (index === words.length - 1) break

    const nextWord = words[index + 1]
    const [fromChar, toChar] = compareWords(curWord, nextWord)
    // update graph
    if (!graph.has(fromChar)) graph.set(fromChar, [])
    if (!graph.has(toChar)) graph.set(toChar, [])

    if (graph.get(fromChar).indexOf(toChar) === -1) {
      graph.get(fromChar).push(toChar)

      // update indegrees
      if (!(toChar in indegrees)) indegrees[toChar] = 0
      if (!(fromChar in indegrees)) indegrees[fromChar] = 0
      indegrees[toChar] += 1
    }
  }

  // find sources
  const sources = new Queue()
  for (let [toChar, count] of Object.entries(indegrees)) {
    if (count === 0) sources.push(toChar)
  }

  // find correct order
  let result = ''
  while (sources.length) {
    const char = sources.shift()

    result += char

    for (let nextChar of graph.get(char)) {
      indegrees[nextChar] -= 1

      if (indegrees[nextChar] === 0) sources.add(nextChar)
    }
  }

  return result
}

module.exports = {findCorrectOrder}
