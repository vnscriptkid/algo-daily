import { searchNextLetter } from "./submit-1"

test('works', () => {
    expect(searchNextLetter(['a', 'c', 'f', 'h'], 'f')).toEqual('h')
    expect(searchNextLetter(['a', 'c', 'f', 'h'], 'b')).toEqual('c')
    expect(searchNextLetter(['a', 'c', 'f', 'h'], 'm')).toEqual('a')
    expect(searchNextLetter(['a', 'c', 'f', 'h'], 'h')).toEqual('a')
})