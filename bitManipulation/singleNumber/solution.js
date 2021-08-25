function findSingleNumber(arr) {
  const seenOnce = new Set()

  for (let number of arr) {
    if (!seenOnce.has(number)) seenOnce.add(number)
    else seenOnce.delete(number)
  }

  return seenOnce.values().next().value
}

module.exports = {findSingleNumber}
