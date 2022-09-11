export function knapsack(weights: number[], profits: number[], capacity: number) {
    function knapsackRecursive(curItemIdx: number, curProfit: number, capacityLeft: number, cache: Record<string, number> = {}): number {
        const cacheKey = String([curItemIdx, curProfit, capacityLeft]);

        if (!(cacheKey in cache)) {
            // base case
            if (curItemIdx === weights.length) {
                return curProfit;
            }

            const skipThisOne = knapsackRecursive(curItemIdx + 1, curProfit, capacityLeft);

            let takeThisOne: number = curProfit;

            if (capacityLeft >= weights[curItemIdx]) {
                takeThisOne = knapsackRecursive(curItemIdx + 1, curProfit + profits[curItemIdx], capacityLeft - weights[curItemIdx]);
            }

            cache[cacheKey] = Math.max(
                skipThisOne,
                takeThisOne
            )
        }

        return cache[cacheKey];

    }

    return knapsackRecursive(0, 0, capacity);
}