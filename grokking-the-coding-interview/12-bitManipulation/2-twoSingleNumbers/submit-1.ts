export function findSingleNumbers(nums: number[]): number[] {
    //  1, 4,    2, 1, 3,   5,   6,  2,   3, 5
    //  1, 100, 10, 1, 11, 101, 110, 10, 11, 101
    //                                        10

    // 1^1 ^ 4 ^ 2^2 ^ 3^3 ^ 5^5 ^ 6

    // 4 ^ 6 === 2

    // a^b === 2 (10)

    // group 1: ...1_ : 2,3,6,2,3 => 6
    // group 2: ...0_ : 1,4,1,5,5 => 4

    let axb = 0;

    for (let num of nums) {
        axb ^= num;
    }

    let firstSetBit = 1;

    while ((firstSetBit & axb) === 0) {
        firstSetBit = firstSetBit << 1;
    }

    let group1 = 0, group2 = 0;

    for (let num of nums) {
        if ((firstSetBit & num) === 0) {
            group1 ^= num;
        } else {
            group2 ^= num;
        }
    }

    return [group1, group2].sort()
}