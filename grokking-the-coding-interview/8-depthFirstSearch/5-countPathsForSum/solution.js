function countPaths(root, sum, currentPath = []) {
  if (!root) return 0

  // add current node to currentPath
  currentPath.push(root.val)

  // +1 for path ending at current node
  let curSum = 0
  let pathCount = 0
  for (let i = currentPath.length - 1; i >= 0; i--) {
    curSum += currentPath[i]
    if (curSum === sum) pathCount++
  }

  pathCount += countPaths(root.left, sum, currentPath)
  pathCount += countPaths(root.right, sum, currentPath)

  currentPath.pop()

  return pathCount
}

module.exports = {countPaths}
