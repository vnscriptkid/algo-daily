function findCorruptPair(arr) {
  // loop all numbers, bring each number to its correct place
  const n = arr.length
  let i = 0
  while (i < n) {
    const j = arr[i] - 1
    if (arr[i] !== arr[j]) [arr[j], arr[i]] = [arr[i], arr[j]]
    else i++
  }

  // loop again, get falsy one
  for (i = 0; i < n; i++) {
    if (arr[i] !== i + 1) return [arr[i], i + 1] // [duplicated, missing]
  }

  return null
}

module.exports = {
  findCorruptPair,
}
