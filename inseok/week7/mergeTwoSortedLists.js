var mergeTwoLists = function(l1, l2) {
  const newLinkedList = new ListNode();
  let pointerOne = l1;
  let pointerTwo = l2;
  let pointer = newLinkedList;
  while (pointerOne && pointerTwo) {
      if (pointerOne.val <= pointerTwo.val) {
          const newNode = new ListNode(pointerOne.val);
          pointer.next = newNode;
          pointer = pointer.next;
          pointerOne = pointerOne.next;
      } else if (pointerTwo.val <= pointerOne.val) {
          const newNode = new ListNode(pointerTwo.val);
          pointer.next = newNode;
          pointer = pointer.next;
          pointerTwo = pointerTwo.next;
      }
  }
  if (pointerOne) {
      pointer.next = pointerOne;
  } else if (pointerTwo) {
      pointer.next = pointerTwo;
  }
  return newLinkedList.next;
};



var mergeTwoLists = function(l1, l2) {
  if (l1 === null) {
      return l2;
  } else if (l2 === null) {
      return l1;
  } else if (l1.val <= l2.val) {
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
  } else {
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
  }
};