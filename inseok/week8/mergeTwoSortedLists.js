var mergeTwoLists = function(l1, l2) {
  const dummy = new ListNode();
  let p1 = l1;
  let p2 = l2;
  let current = dummy;
  while (p1 && p2) {
      if (p1.val <= p2.val) {
          current.next = p1;
          current = current.next;
          p1 = p1.next;
      } else if (p1.val > p2.val) {
          current.next = p2;
          current = current.next;
          p2 = p2.next;
      }
  }
  
  if (p1) {
      current.next = p1;
  } else if (p2) {
      current.next = p2;
  }
  
  return dummy.next;
}
