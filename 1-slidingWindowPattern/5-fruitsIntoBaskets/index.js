// ['A', 'B', 'C', 'A', 'C']
//             $
//                       ^

// A: 1
// C: 2
// max: 3

function sum(obj) {
  return Object.keys(obj).reduce((acc, key) => acc + obj[key], 0)
}

function putFruitsIntoTwoBaskets(fruits) {
  const count = {}
  let max = 0

  let windowStart = 0

  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    let lastFruit = fruits[windowEnd]

    if (!(lastFruit in count)) count[lastFruit] = 0
    count[lastFruit]++

    while (Object.keys(count).length > 2) {
      let firstFruit = fruits[windowStart]
      count[firstFruit]--
      if (count[firstFruit] === 0) delete count[firstFruit]
      windowStart++
    }

    max = Math.max(max, sum(count))
  }

  return max
}

module.exports = {putFruitsIntoTwoBaskets}
