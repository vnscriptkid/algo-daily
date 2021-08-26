function backspace_compare(str1, str2) {
  let index1 = str1.length - 1,
    index2 = str2.length - 1
  while (index1 >= 0 || index2 >= 0) {
    let i1 = get_next_valid_char_index(str1, index1),
      i2 = get_next_valid_char_index(str2, index2)
    if (i1 < 0 && i2 < 0) {
      return true
    }
    if (i1 < 0 || i2 < 0) {
      return false
    }
    if (str1[i1] !== str2[i2]) {
      return false
    }
    index1 = i1 - 1
    index2 = i2 - 1
    return true
  }
}

function get_next_valid_char_index(str, index) {
  let backspaceCount = 0
  while (index >= 0) {
    if (str[index] === "#") {
      backspaceCount += 1
    } else if (backspaceCount > 0) {
      backspaceCount -= 1
    } else {
      break
    }
    index -= 1
  }
  return index
}

console.log(backspace_compare("xy#z", "xzz#"))
console.log(backspace_compare("xy#z", "xyz#"))
console.log(backspace_compare("xp#", "xyz##"))
console.log(backspace_compare("xywrrmp", "xywrrmu#p"))
