export function findPermutations(nums: number[], seen = new Set(), curPer: number[] = [], all: number[][] = []) {
    if (curPer.length === nums.length) {
        all.push([...curPer])
        return all;
    }

    //            1(3,5)             3(1,5)             5(1,3)

    //         1,3(5)    1,5(3)     1(5)     5(1)      1(3)      3(1)     


    //      1,3,5()       3()     5()        1()     3()        1()

    for (let i = 0; i < nums.length; i++) {
        if (!seen.has(nums[i])) {
            seen.add(nums[i]);
            curPer.push(nums[i]);

            findPermutations(nums, seen, curPer, all);

            curPer.pop();
            seen.delete(nums[i]);
        }
    }

    return all;
}