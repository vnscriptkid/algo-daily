/*
Problem Statement 
Given an array of numbers and a number ‘k’, find the median of all the ‘k’ sized sub-arrays (or windows) of the array.
Example 1:
Input: nums=[1, 2, -1, 3, 5], k = 2
Output: [1.5, 0.5, 1.0, 4.0]
Explanation: Lets consider all windows of size ‘2’:
[(1, 2), -1, 3, 5] -> median is 1.5
[1, (2, -1), 3, 5] -> median is 0.5
[1, 2, (-1, 3), 5] -> median is 1.0
[1, 2, -1, (3, 5)] -> median is 4.0
Example 2:
Output: [1.0, 2.0, 3.0]
Explanation: Lets consider all windows of size ‘3’:
[1, 2, -1, 3, 5] -> median is 1.0
[1, 2, -1, 3, 5] -> median is 2.0
[1, 2, -1, 3, 5] -> median is 3.0
*/

// import * as Heap from 'collections/heap';
const Heap = require('collections/heap');

export function slidingWindowMedian(nums: number[], k: number): number[] {
    // Input: nums=[1, 2, -1, 3, 5], k = 3
    //              $  ^
    //              ()

    let smaller = new Heap([], null, (a: number, b: number) => a - b); // maxHeap
    let larger = new Heap([], null, (a: number, b: number) => b - a); // minHeap

    let left = 0;
    const result: number[] = [];

    for (let right = 0; right < nums.length; right++) {
        let isEven = smaller.length === larger.length;
        let newNum = nums[right];

        if (isEven) {
            larger.add(newNum);
            smaller.add(larger.pop());
        } else {
            smaller.add(newNum);
            larger.add(smaller.pop());
        }

        if (right >= k - 1) {
            // window is of size k
            const median = smaller.length === larger.length ? (smaller.peek() + larger.peek()) / 2 : smaller.peek()
            result.push(median);

            const numOut = nums[left++];
            if (numOut <= smaller.peek()) {
                smaller.delete(numOut)

                if (smaller.length < larger.length) {
                    smaller.add(larger.pop())
                }
            } else {
                larger.delete(numOut);

                if (smaller.length - larger.length === 2) {
                    larger.add(smaller.pop())
                }
            }
        }
    }

    return result;
}
