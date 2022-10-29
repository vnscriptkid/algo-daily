export function longestSubstrWithKDistinctChars(str: string, k: number) {
    // k = 2

    // a  r  a  a  c  i
    // ^           $

    // { a: 3, r: 1, c: 1 }

    let globalLongest = 1;

    let charFreq: Record<string, number> = {};

    let left = 0;
    for (let right = 0; right < str.length; right++) {
        // extend cur window to right
        const curChar = str[right];

        if (!(curChar in charFreq)) {
            charFreq[curChar] = 0;
        }

        charFreq[curChar]++;

        while (Object.keys(charFreq).length > k) {
            // shrink window down from left
            const leftMostChar = str[left]
            charFreq[leftMostChar]--;
            if (charFreq[leftMostChar] === 0) {
                delete charFreq[leftMostChar];
            }
            left++;
        }

        globalLongest = Math.max(globalLongest, right - left + 1)
    }

    return globalLongest;
}

longestSubstrWithKDistinctChars('araaci', 2)