/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  let truthy = true;
  const recurse = (a, b) => {
      if (a && !b) {
          truthy = false;
          return;
      } else if (!a && b) {
          truthy = false;
          return;
      } else if (!a && !b) {
          return;
      }
      if (a.val !== b.val) {
          truthy = false;
          return;
      }
      recurse(a.left, b.left);
      recurse(a.right, b.right);
  }
  recurse(p, q);
  return truthy;
};

var isSameTree = function(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

var isSameTree = function(p, q) {
  const isSame = (a, b) => {
      if (!a && !b) return true;
      if (!a || !b) return false;
      if (a.val !== b.val) return false;
      return true;
  }
  if (!p && !q) return true;
  if (!isSame(p, q)) return false;
  const pQueue = [];
  const qQueue = [];
  pQueue.push(p);
  qQueue.push(q);
  while (pQueue.length > 0) {
      const firstP = pQueue.shift();
      const firstQ = qQueue.shift();
      console.log('firstP.val', firstP.val);
      console.log('firstQ.val', firstQ.val);
      if (!isSame(firstP, firstQ)) return false;
      if (!isSame(firstP.left, firstQ.left)) return false;
      if (!isSame(firstP.right, firstQ.right)) return false;
      if (firstP.left) {
          pQueue.push(firstP.left);
          qQueue.push(firstQ.left);
      }
      if (firstP.right) {
          pQueue.push(firstP.right);
          qQueue.push(firstQ.right);
      }
  }
  return true;
}