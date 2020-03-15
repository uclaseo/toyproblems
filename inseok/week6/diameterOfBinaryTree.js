var diameterOfBinaryTree = function(root) {
  let longestPath = 0;
  const recursion = (node) => {
    if (!node) return 0;
    
    const left = recursion(node.left);
    const right = recursion(node.right);
    if (left + right > longestPath) {
      longestPath = left + right;
    }
    return left > right ? left + 1 : right + 1;
  }
  recursion(root);
  return longestPath
};