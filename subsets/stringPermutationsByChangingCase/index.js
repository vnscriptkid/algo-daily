function findCasePermutations(str) {
  let permutations = [str];

  for (let i = 0; i < str.length; i++) {
    let curChar = str[i];

    if (isNaN(curChar)) {
      const n = permutations.length;
      for (let j = 0; j < n; j++) {
        let curPer = permutations[j];
        let newPer =
          curPer.substring(0, i) +
          curChar.toUpperCase() +
          curPer.substring(i + 1);
        permutations.push(newPer);
      }
    }
  }

  return permutations;
}

module.exports = { findCasePermutations };
