import { isHappyNumber } from "./submit-1"

test('works 1', () => {
    expect(isHappyNumber(23)).toEqual(true);
    expect(isHappyNumber(12)).toEqual(false);
})