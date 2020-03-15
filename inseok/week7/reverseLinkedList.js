function reverseList(head) {
  let current = head;
  let currentNew = null;
  while (current) {
      const newNode = new ListNode(current.val);
      newNode.next = currentNew;
      current = current.next;
      currentNew = newNode;
  }
  return currentNew;
}
