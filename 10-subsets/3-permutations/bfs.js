// Given a set of distinct numbers, find all of its permutations.

// Permutation is defined as the re-arranging of the elements of the set. For example, {1, 2, 3} has the following six permutations:

// Input:  {1, 2, 3}
// {1, 2, 3}
// {1, 3, 2}
// {2, 1, 3}
// {2, 3, 1}
// {3, 1, 2}
// {3, 2, 1}

//               [ [] ]

// 1:            [ [1] ]

// 2:      [  [2, 1]           [1, 2]     ]

// 3:   [ [3,2,1] [2,3,1] [2,1,3]  | [3,1,2] [1,3,2] [1,2,3] ]

const Queue = require('collections/deque')

function generateNewPermutations(queue, curNum, prevPermutation) {
  // [x, y]
  // curNum: z
  // 3 choices: [z, x, y], [x, z, y], [x, y, z]
  for (let i = 0; i <= prevPermutation.length; i++) {
    const newPer = [
      ...prevPermutation.slice(0, i),
      curNum,
      ...prevPermutation.slice(i),
    ]
    queue.add(newPer)
  }
}

function findPermutations(numbers) {
  const queue = new Queue()
  queue.add([])

  for (let curNum of numbers) {
    // process current level
    let levelSize = queue.length

    while (levelSize > 0) {
      const permutationOut = queue.shift() // dequeue
      generateNewPermutations(queue, curNum, permutationOut)
      levelSize--
    }
  }

  return Array.from(queue)
}

module.exports = {findPermutations}
