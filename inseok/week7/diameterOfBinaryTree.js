var diameterOfBinaryTree = function(root) {
  let longestPath = 0;
  const recurse = (node) => {
      if (!node) return 0;
      const left = recurse(node.left);
      const right = recurse(node.right);
      if (left + right >= longestPath) {
          longestPath = left + right;
      }
      return left > right ? left + 1 : right + 1;
  }
  recurse(root);
  return longestPath;
};

