// https://www.youtube.com/watch?v=hPX1pjG1wwY

// find 3 consecutive equal chars in a string

// input: y o u t t t u b e
//        ^
// output: 3

function find3InRow(str) {
  for (let i = 0; i <= str.length - 3; i++) {
    if (str[i] === str[i + 1] && str[i + 1] === str[i + 1 + 1]) return i
  }
  return -1
}

module.exports = {find3InRow}
