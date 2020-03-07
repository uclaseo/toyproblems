/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  //     let dummyHead = new ListNode();
  //     let currentL1 = l1;
  //     let currentL2 = l2;
  //     let currentHead = dummyHead;
  //     while (currentL1 || currentL2) {
  //       if (currentL1 === null) {
  //         currentHead.next = currentL2;
  //         break;
  //       }
  //       if (currentL2 === null) {
  //         currentHead.next = currentL1;
  //         break;
  //       }
        
  //       if (currentL1.val < currentL2.val) {
  //         currentHead.next = new ListNode(currentL1.val);
  //         currentL1 = currentL1.next;
  //         currentHead = currentHead.next;
  //       } else {
  //         currentHead.next = new ListNode(currentL2.val);
  //         currentL2 = currentL2.next;
  //         currentHead = currentHead.next;
  //       }
  
  //     }
  //   return dummyHead.next;
  
      const dummyHead = new ListNode();
      let currentL1 = l1;
      let currentL2 = l2;
      let currentNode = dummyHead;
      while (currentL1 || currentL2) {
          if (currentL1 === null) {
              currentNode.next = currentL2;
              break;
          }
          if (currentL2 === null) {
              currentNode.next = currentL1;
              break;
          }
          if (currentL1.val <= currentL2.val) {
              currentNode.next = new ListNode(currentL1.val);
              currentNode = currentNode.next;
              currentL1 = currentL1.next;
          } else if (currentL1.val > currentL2.val) {
              currentNode.next = new ListNode(currentL2.val);
              currentNode = currentNode.next;
              currentL2 = currentL2.next;
          }
          
      }
      return dummyHead.next;
  };