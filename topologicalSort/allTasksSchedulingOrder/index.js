function _findAllSchedulingOrders(
  graph,
  indegrees,
  sources,
  allOrders,
  sortedOrder = []
) {
  if (sortedOrder.length === graph.length) allOrders.push(sortedOrder.slice(0));

  if (!sources.length) return;

  for (let i = 0; i < sources.length; i++) {
    const task = sources[i];
    // go deep
    sortedOrder.push(task);
    const sourcesForNextCall = sources.slice(0);
    sourcesForNextCall.splice(i, 1); // delete 1 task at index i

    for (let neighbor of graph[task]) {
      indegrees[neighbor] -= 1;

      if (indegrees[neighbor] === 0) sourcesForNextCall.push(neighbor);
    }

    _findAllSchedulingOrders(
      graph,
      indegrees,
      sourcesForNextCall,
      allOrders,
      sortedOrder
    );

    // backtrack
    sortedOrder.pop();

    for (let neighbor of graph[task]) {
      indegrees[neighbor] += 1;
    }
  }
}

function findAllSchedulingOrders(numOfTasks, prerequisites) {
  const allOrders = [];

  // build graph, indegrees map
  const graph = Array(numOfTasks)
    .fill(0)
    .map(() => Array());
  const indegrees = Array(numOfTasks).fill(0);

  for (let [from, to] of prerequisites) {
    graph[from].push(to);
    indegrees[to] += 1;
  }

  // find source task
  const sources = [];
  for (let [task, incommings] of indegrees.entries()) {
    if (incommings === 0) sources.push(task);
  }

  // find all orders using backtracking
  _findAllSchedulingOrders(graph, indegrees, sources, allOrders);

  return allOrders;
}

module.exports = { findAllSchedulingOrders };
