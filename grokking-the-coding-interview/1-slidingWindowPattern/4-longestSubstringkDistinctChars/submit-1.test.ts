import { longestSubstrWithKDistinctChars } from "./submit-1"

test('works 1', () => {
    expect(longestSubstrWithKDistinctChars('araaci', 2)).toEqual(4)
})

test('works 2', () => {
    expect(longestSubstrWithKDistinctChars('araaci', 1)).toEqual(2)
})

test('works 3', () => {
    expect(longestSubstrWithKDistinctChars('cbbebi', 3)).toEqual(5)
})