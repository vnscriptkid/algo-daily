export function findSubsets(nums: number[]) {
    //        []
    // 1    []   [1]
    // 3   [] [3]  [1]  [1,3]

    const allSubsets: number[][] = [[]];

    for (let num of nums) {
        let levelSize = allSubsets.length;

        while (levelSize > 0) {
            let item = allSubsets.shift();

            const skipNum = item?.slice()!;
            const pickNum = item?.concat([num])!;

            allSubsets.push(skipNum);
            allSubsets.push(pickNum);

            levelSize--;
        }
    }

    return allSubsets;
}