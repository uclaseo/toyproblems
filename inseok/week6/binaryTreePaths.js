/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const paths = [];
  let string = '';
  if (!root) {
      return paths;
  }
  const recurse = (node, string) => {
      if (!node.left && !node.right) {
          string += `${node.val}`;
          paths.push(string);
          return;
      }
      string += `${node.val}->`;
      if (node.left) {
          recurse(node.left, string);
      }
      if (node.right) {
          recurse(node.right, string);
      }
  }
  recurse(root, string);
  return paths;
};