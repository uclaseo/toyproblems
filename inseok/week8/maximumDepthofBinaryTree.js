var maxDepth = function(root) {
  // DFS
  let depth = 0;
  const recurse = (node, count) => {
      if (!node) {
          if (count >= depth) {
              depth = count;
          }
          return;
      }
      recurse(node.left, count + 1);
      recurse(node.right, count + 1);
  }
  recurse(root, depth);
  return depth;
  // BFS
};

