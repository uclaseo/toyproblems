/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const dummyHead = new ListNode();
  let current = dummyHead;
  let carry = 0;
  let p1 = l1;
  let p2 = l2;
  while (p1 || p2) {
      let value = carry;
      carry = 0;
      if (p1) {
          value += p1.val;
          p1 = p1.next;
      }
      if (p2) {
          value += p2.val;
          p2 = p2.next;
      }
      if (value >= 10) {
          value %= 10;
          carry = 1;
      }
      current.next = new ListNode(value);
      current = current.next;
  }
  if (carry) {
      current.next = new ListNode(carry);
  }

  return dummyHead.next;
};