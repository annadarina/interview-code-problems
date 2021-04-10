/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
  if (!head) {
    return false;
  }

  let fPointer = head;
  let sPointer = head;

  while (fPointer) {
    if (fPointer.next === null) {
      return false;
    } else {
      fPointer = fPointer.next.next;
      sPointer = sPointer.next;
    }

    if (fPointer === sPointer) {
      return true
    }
  }

  return false;
};
