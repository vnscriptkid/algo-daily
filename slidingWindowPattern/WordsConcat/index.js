function buildWordsFreq(words) {
  const freq = {};
  for (let word of words) {
    if (!(word in freq)) freq[word] = 0;
    freq[word] += 1;
  }
  return freq;
}

function findConcat(str, words) {
  const indicies = [];
  const wordLength = words[0].length;
  let concatLength = wordLength * words.length;
  const wordsFreq = buildWordsFreq(words);

  for (let i = 0; i <= str.length - concatLength; i++) {
    const wordsSeen = {};

    for (let j = 0; j < words.length; j++) {
      const wordStartIndex = i + j * wordLength;

      const curWord = str.substr(wordStartIndex, wordLength);
      // if one word is not included in wordsFreq then stop and move on
      if (!(curWord in wordsFreq)) break;

      // if one word is included but more than we need, stop and move on
      if (!(curWord in wordsSeen)) wordsSeen[curWord] = 0;
      wordsSeen[curWord] += 1;

      if (wordsSeen[curWord] > wordsFreq[curWord]) break;

      // if all matched, save i to result
      if (j === words.length - 1) indicies.push(i);
    }
  }

  return indicies;
}

module.exports = { findConcat };
