function findDuplicateNumber2(arr) {
  // loop all numbers
  const n = arr.length
  let i = 0
  let j

  while (i < n) {
    j = arr[i] - 1
    if (arr[i] !== arr[j]) [arr[j], arr[i]] = [arr[i], arr[j]]
    else i++
  }

  for (i = 0; i < n; i++) {
    if (arr[i] !== i + 1) return arr[i]
  }
}

function findDuplicateNumber(arr) {
  let slow = (fast = arr[0])

  do {
    slow = arr[slow]
    fast = arr[fast]
    fast = arr[fast]
  } while (slow !== fast)

  fast = arr[0]
  while (slow !== fast) {
    slow = arr[slow]
    fast = arr[fast]
  }

  return fast
}

module.exports = {findDuplicateNumber}
