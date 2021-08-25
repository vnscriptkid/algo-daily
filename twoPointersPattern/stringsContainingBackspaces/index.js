function checkDelete(str, curPointer) {
  let count = 0;

  while (curPointer >= 0 && str[curPointer] === "#") {
    curPointer--;
    count++;
  }

  while (curPointer >= 0 && count > 0) {
    curPointer--;
    count--;
  }

  return curPointer;
}

function compareStrings(s1, s2) {
  let p1 = s1.length - 1,
    p2 = s2.length - 1;

  while (p1 >= 0 && p2 >= 0) {
    p1 = checkDelete(s1, p1);

    p2 = checkDelete(s2, p2);

    if (p1 < 0 || p2 < 0) break;

    if (s1[p1] !== s2[p2]) return false;
    p1--;
    p2--;
  }

  return p1 < 0 && p2 < 0;
}

module.exports = { compareStrings };
