// Minimum Subset Sum Difference
// Given a set of positive numbers, partition the set into two subsets with minimum difference between their subset sums.

// Input: {1, 2, 3, 9}
// Output: 3
// Explanation: We can partition the given set into two subsets where minimum absolute difference
// between the sum of numbers is '3'. Following are the two subsets: {1, 2, 3} & {9}.

// {1, 2, 3, 9}
//           ^

//                 A{}B{}
//     A{1}B{}                        A{}B{1}

// A{1,2}B{}  A{1}B{2}          A{2}B{1}    A{}B{1,2}

// A{1,2,3}B{} A{1,2}B{3} | A{1,3}B{2} A{1}B{2,3} | A{2,3}B{1}  A{2}B{1,3} | A{3}B{1,2}  A{}B{1,2,3}
//    6-0         3-3          4-2        1-5          5-1         2-4          3-3         0-6

// A{1,2,3,9}B{} A{1,2,3}B{9}|A{1,2,9}B{3} A{1,2}B{3,9} | A{1,3,9}B{2} A{1,3}B{2,9} | A{1,9}B{2,3}  A{1}B{2,3,9}
//    15-0=15        6-9=3      12-3=9         3-12=9        13-2=11      4-11=7        10-5=5         1-14=13
//  A{2,3,9}B{1} A{2,3}B{1,9} | A{2,9}B{1,3} A{2}B{1,3,9} | A{3,9}B{1,2} A{3}B{1,2,9} | A{9}B{1,2,3}  A{}B{1,2,3,9}
//     14-1=13      5-10=5         11-4=7       2-13=11        12-3=9       3-12=9        9-6=3         0-15=15

function findMinSubsetSumDiff(numbers) {
  const cache = {}

  function _findMinSubsetSumDiff(numbers, curIndex = 0, sum1 = 0, sum2 = 0) {
    // base case
    if (curIndex === numbers.length) {
      return Math.abs(sum1 - sum2)
    }

    const args = [curIndex, Math.min(sum1, sum2)]

    if (cache[args]) return cache[args]

    // Choice 1: Add curNum to sum1
    const diff1 = _findMinSubsetSumDiff(
      numbers,
      curIndex + 1,
      sum1 + numbers[curIndex],
      sum2,
    )

    // Choice 2: Add curNum to sum2
    const diff2 = _findMinSubsetSumDiff(
      numbers,
      curIndex + 1,
      sum1,
      sum2 + numbers[curIndex],
    )

    const result = Math.min(diff1, diff2)

    cache[args] = result

    return result
  }

  return _findMinSubsetSumDiff(numbers)
}

module.exports = {findMinSubsetSumDiff}
