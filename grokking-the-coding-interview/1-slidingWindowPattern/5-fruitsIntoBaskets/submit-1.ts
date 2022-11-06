export function findLength(arr: string[]) {
    // ['A', 'B', 'C', 'B', 'B', 'C']
    //        ^                   $

    // {B: 3, C: 2}

    let left = 0;

    const basket = {};

    let maxLength = 0;
    let curLength = 0;

    for (let right = 0; right < arr.length; right++) {
        const fruit = arr[right];

        if (!(fruit in basket)) {
            basket[fruit] = 0;
        }

        basket[fruit]++;
        curLength++;

        while (Object.keys(basket).length > 2) {
            const leftFruit = arr[left];

            basket[leftFruit]--;
            curLength--;

            if (basket[leftFruit] === 0) {
                delete basket[leftFruit];
            }

            left++;
        }

        maxLength = Math.max(maxLength, curLength)
    }

    return maxLength;
}