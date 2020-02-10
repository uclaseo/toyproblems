/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let diam = 0;
    let depth = function(root) {
        if (!root || (!root.left && !root.right)) return 0;
        let depthL = depth(root.left);
        let depthR = depth(root.right);
        let tempDiam = 0;
        if (root.left) tempDiam += 1 + depthL;
        if (root.right) tempDiam += 1 + depthR;
        diam = Math.max(diam, tempDiam);
        return 1 + Math.max(depthL, depthR);
    };
    depth(root);
    return diam;
};