// Fruits into Baskets

// Given an array of characters where each character represents a fruit tree, you are given two baskets and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

// You can start with any tree, but once you have started you can’t skip a tree. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

// Write a function to return the maximum number of fruits in both the baskets.

// Input: Fruit=['A', 'B', 'C', 'A', 'C']
// Output: 3
// Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']

// ['A', 'B', 'C', 'A', 'C']
//             $
//                          ^

// window: C  A  C
// max: 3

function putFruitsIntoTwoBaskets(fruits) {
  let windowStart = 0
  let max = -Infinity

  const freq = {}

  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    let curFruit = fruits[windowEnd]

    if (!(curFruit in freq)) freq[curFruit] = 0
    freq[curFruit]++

    while (Object.keys(freq).length > 2) {
      let firstFruit = fruits[windowStart]
      freq[firstFruit]--
      if (freq[firstFruit] === 0) delete freq[firstFruit]
      windowStart++
    }

    let windowSize = windowEnd - windowStart + 1
    max = Math.max(windowSize, max)
  }

  return max
}

module.exports = {putFruitsIntoTwoBaskets}
