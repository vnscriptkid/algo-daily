// Words Concatenation
// Given a string and a list of words,
// find all the starting indices of substrings in the given string
// that are a concatenation of all the given words exactly once without any overlapping of words.
// It is given that all words are of the same length.

// Input: String="catcatfoxfox", Words=["cat", "fox"]
// Output: [3]
// Explanation: The only substring containing both the words is "catfox".

// Input: String="catcatfoxfox", Words=["cat", "fox"]
// Output: [3]
// Explanation: The only substring containing both the words is "catfox".

function findConcat(str, words) {
  const freq = {}

  for (let word of words) {
    if (!(word in freq)) freq[word] = 0
    freq[word]++
  }

  let wordLength = words[0].length

  const output = []

  for (let i = 0; i < str.length - wordLength; i++) {
    let cur = {}

    for (let j = 0; j < words.length; j++) {
      let nextWordFirstIdx = i + j * wordLength

      let nextWord = str.substr(nextWordFirstIdx, wordLength)

      if (!(nextWord in freq)) break

      if (!(nextWord in cur)) cur[nextWord] = 0
      cur[nextWord]++

      if (cur[nextWord] > freq[nextWord]) break

      if (j === words.length - 1) {
        output.push(i)
      }
    }
  }

  return output
}

module.exports = {findConcat}
