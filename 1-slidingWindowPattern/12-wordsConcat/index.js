// Words Concatenation
// Given a string and a list of words,
// find all the starting indices of substrings in the given string
// that are a concatenation of all the given words exactly once without any overlapping of words.
// It is given that all words are of the same length.

// Input: String="catcatfoxfox", Words=["cat", "fox"]
// catfox
// foxcat
// Output: [3]
// Explanation: The only substring containing both the words is "catfox".

// Input: String="catcatfoxfox", Words=["cat", "fox"]
// Output: [3]
// Explanation: The only substring containing both the words is "catfox".

function findConcat(str, words) {
  // build freq map from words
  const freq = {}
  for (let word of words) {
    if (!(word in freq)) freq[word] = 0
    freq[word]++
  }
  // start checking windows, each item is of size wordLength, keep track of count of item

  const wordLength = words[0].length

  const result = []

  for (let i = 0; i <= str.length - words.length * wordLength; i++) {
    const curFreq = {}
    for (let j = 0; j < words.length; j++) {
      const firstIdxOfCurWord = i + j * wordLength
      const curWord = str.substr(firstIdxOfCurWord, wordLength)

      if (!(curWord in freq)) break

      if (!(curWord in curFreq)) curFreq[curWord] = 0
      curFreq[curWord]++

      if (curFreq[curWord] > freq[curWord]) break

      if (j === words.length - 1) result.push(i)
    }
  }

  return result
}

module.exports = {findConcat}
