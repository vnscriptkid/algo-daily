function findTwoSingleNumbers(arr) {
  const seenOnce = new Set()

  for (let i of arr) {
    if (seenOnce.has(i)) seenOnce.delete(i)
    else seenOnce.add(i)
  }

  return Array.from(seenOnce)
}

module.exports = {findTwoSingleNumbers}
