// Given a set of distinct numbers, find all of its permutations.

// Permutation is defined as the re-arranging of the elements of the set. For example, {1, 2, 3} has the following six permutations:

// Input:  {1, 2, 3}
// {1, 2, 3}
// {1, 3, 2}
// {2, 1, 3}
// {2, 3, 1}
// {3, 1, 2}
// {3, 2, 1}

// result: [ [_, _, _] ]

//                    [(_), _, _]{1,2,3}

//  [1, (_), _]{2,3}             [2, (_), _]{1,3}        [3, (_), _]{1,2}

// [1,2,_]{3}  [1,3,_]{2}      [2,1,_]{3}  [2,3,_]{1}       [3,1,_]{2}   [3,2,_]{1}

// [1,2,3]     [1,3,2]         [2,1,3]  [2,3,1]             [3,1,2]  [3,2,1]

function findPermutations(nums, curPer = [], all = []) {
  // base case
  if (nums.length === 0) {
    all.push([...curPer])
    return
  }

  for (let num of nums) {
    curPer.push(num)
    const newSpace = nums.filter(cur => cur !== num)
    findPermutations(newSpace, curPer, all)
    curPer.pop()
  }

  return all
}

module.exports = {findPermutations}
