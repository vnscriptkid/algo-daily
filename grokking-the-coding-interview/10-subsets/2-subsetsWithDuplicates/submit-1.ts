export function subsetsWithDuplicates(nums: number[], curIdx = 0, curPath: number[] = [], allPaths: number[][] = [], seen: Set<string> = new Set()): number[][] {
    // [1, 3, 3]

    // 1         _           1

    // 3      _     3      _    3

    // 3    _   3  _  3   _ 3   _  3

    // [], [3], [3], [3,3], [1], [1,3], [1,3], [1,3,3]

    // visit cur num
    if (curIdx === nums.length) {
        const key = String(curPath);
        if (!seen.has(key)) {
            allPaths.push([...curPath]);
            seen.add(key);
        }
        return [];
    }


    // 2 choices:
    // (1) take cur
    curPath.push(nums[curIdx])
    subsetsWithDuplicates(nums, curIdx + 1, curPath, allPaths, seen);
    curPath.pop()
    // (2) skip cur
    subsetsWithDuplicates(nums, curIdx + 1, curPath, allPaths, seen);

    return allPaths;
}