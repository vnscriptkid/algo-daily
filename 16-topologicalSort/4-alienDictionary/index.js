// Alien Dictionary

// There is a dictionary containing words from an alien language for which we don’t know the ordering of the characters.
// Write a method to find the correct order of characters in the alien language.

// Input: Words: ["ywx", "wz", "xww", "xz", "zyy", "zwz"]
// Output: ywxz
// Explanation: From the given words we can conclude the following ordering among its characters:

// 1. From "ywx" and "wz", we can conclude that 'y' comes before 'w'.
// 2. From "wz" and "xww", we can conclude that 'w' comes before 'x'.
// 3. From "xww" and "xz", we can conclude that 'w' comes before 'z'
// 4. From "xz" and "zyy", we can conclude that 'x' comes before 'z'
// 5. From "zyy" and "zwz", we can conclude that 'y' comes before 'w'

// From the above five points, we can conclude that the correct character order is: "ywxz"

function findCharsOrder(curWord, nextWord) {
  let i = 0
  while (i < curWord.length && i < nextWord.length) {
    if (curWord[i] !== nextWord[i]) return [curWord[i], nextWord[i]]

    i++
  }

  return [null, null]
}

function findCorrectOrder(words) {
  // init graph, incomming map
  const graph = new Map()
  const incommings = new Map()

  for (let word of words) {
    for (let char of word) {
      if (!graph.has(char)) graph.set(char, [])

      if (!incommings.has(char)) incommings.set(char, 0)
    }
  }

  // build a graph
  // build incomming map
  // compare 2 words that is next to each other
  for (let i = 1; i < words.length; i++) {
    let prevWord = words[i - 1]
    let curWord = words[i]

    // find order 2 characters in dictionary
    const [prevChar, nextChar] = findCharsOrder(prevWord, curWord)

    graph.get(prevChar).push(nextChar)

    incommings.set(nextChar, 1 + incommings.get(nextChar))
  }

  // do topological sort
  const sources = [] // queue
  let sortedOrder = ''

  for (let [destChar, numOfDeps] of incommings) {
    if (numOfDeps === 0) sources.push(destChar)
  }

  while (sources.length) {
    // process one node from the sources for 1 iteration
    const charOut = sources.shift()

    sortedOrder += charOut

    // update incommings
    for (let destChar of graph.get(charOut)) {
      incommings.set(destChar, incommings.get(destChar) - 1)

      if (incommings.get(destChar) === 0) sources.push(destChar)
    }
  }

  return sortedOrder
}

module.exports = {findCorrectOrder}
