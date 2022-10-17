export function searchNextLetter(letters: string[], key: string) {
    // ['a', 'c', 'f', 'h']
    let left = 0, right = letters.length - 1;

    while (left <= right) {
        let middle = Math.floor(left + (right - left) / 2);

        if (key === letters[middle]) {
            return letters[middle + 1] || letters[0]
        }

        if (key > letters[middle]) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    // right > left now
    return letters[left] || letters[0];
}