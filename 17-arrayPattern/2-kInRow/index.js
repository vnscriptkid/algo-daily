// https://www.youtube.com/watch?v=hPX1pjG1wwY

// find k consecutive equal chars in a string

// input: y o u t t t u b e
//        ^
// output: 3

function findKInRow(str, k) {
  for (let i = 0; i <= str.length - k; i++) {
    //   if (str[i] === str[i + 1] && str[i + 1] === str[i + 1 + 1]) return i
    let j = i
    let count = k
    while (count > 0) {
      if (str[j] !== str[j + 1]) break
      count--
    }
    if (count === 0) return i
  }
  return -1
}

module.exports = {findKInRow}
