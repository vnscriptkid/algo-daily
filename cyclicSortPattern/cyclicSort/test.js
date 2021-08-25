const {sort} = require('./index');

test('it works 1', () => {
    const arr = [1,4,2,3,9,6,7,5,8];
    sort(arr);
    expect(arr).toEqual([1,2,3,4,5,6,7,8,9]);
});

test('it works 2', () => {
    const arr = [1,4,2,3,6,7,5,8];
    sort(arr);
    expect(arr).toEqual([1,2,3,4,5,6,7,8]);
});