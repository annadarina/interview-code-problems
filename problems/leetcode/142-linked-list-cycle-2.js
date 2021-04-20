/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const detectCycle = function (head) {
  if (!head) {
    return null;
  }


  let sPointer = head.next;
  let fPointer = head.next ? head.next.next : null;

  while (fPointer) {
    if (sPointer === fPointer) {
      let p = head;

      while (p !== fPointer) {
        p = p.next;
        fPointer = fPointer.next;
      }

      return p;
    }

    sPointer = sPointer.next;
    fPointer = fPointer.next ? fPointer.next.next : null;
  }

  return null;
};
