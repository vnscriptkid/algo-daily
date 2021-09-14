function findAllDuplicates(arr) {
  const duplicates = []
  const n = arr.length
  // loop through all numbers
  let i = 0
  while (i < n) {
    // bring it back to correct position
    const j = arr[i] - 1
    if (arr[i] !== arr[j]) [arr[j], arr[i]] = [arr[i], arr[j]]
    else i++
  }

  // loop again, find misplaced numbers
  for (i = 0; i < n; i++) {
    if (arr[i] !== i + 1) duplicates.push(arr[i])
  }

  // return
  return duplicates
}

module.exports = {findAllDuplicates}
