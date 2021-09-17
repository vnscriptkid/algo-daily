// Given an array of lowercase letters sorted in ascending order,
// find the smallest letter in the given array greater than a given ‘key’.

// Assume the given array is a circular list, which means that the last letter is assumed to be connected with the first letter. This also means that the smallest letter in the given array is greater than the last letter of the array and is also the first letter of the array.

// ['a', 'c', 'f', 'h'], key = 'f'
//        #    @    $

// left: 2
// right: 3
// middle: 2.5 ~ 2

// ['a', 'c', 'f', 'h'], key = 'h'
//                 @#$

function findNextLetter(chars, key) {
  let left = 0,
    right = chars.length - 1

  while (left <= right) {
    let middle = left + Math.floor((right - left) / 2)

    if (key === chars[middle]) return chars[middle + 1] || chars[0]

    if (key > chars[middle]) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }
  // left > right

  //      x
  //  r   ml
  return chars[left]
}

module.exports = {findNextLetter}
