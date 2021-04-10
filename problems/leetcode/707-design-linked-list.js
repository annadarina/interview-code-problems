/**
 * Node class
 */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Initialize your data structure here.
 */
class MyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index >= this.length) {
    return -1;
  }

  let currentNode = this.head;
  let i = 0;

  while (i !== index) {
    currentNode = currentNode.next;
    i++;
  }

  return currentNode.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const newHead = new Node(val);
  const currentHead = this.head;

  this.length++;
  this.head = newHead;

  if (currentHead) {
    this.head.next = currentHead;
  }
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const newTail = new Node(val);
  let tail = this.head;

  this.length++;

  if (!tail) {
    this.head = newTail;
  } else {
    while (tail.next !== null) {
      tail = tail.next;
    }

    tail.next = newTail;
  }
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.length + 1) {
    return;
  }

  this.length++;

  if (index <= 0) {
    this.addAtHead(val);
    return;
  }

  if (index === this.length) {
    this.addAtTail(val);
    return;
  }

  let currentNode = this.head;
  let newNode = new Node(val);

  for (let i = 0; i < index - 1; i++) {
    currentNode = currentNode.next;
  }

  newNode.next = currentNode.next;
  currentNode.next = newNode;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index > this.length - 1) {
    return;
  }

  this.length--;

  let current = this.head;

  if (index === 0) {
    this.head = this.head.next;
    return;
  }

  for (let i = 0; i < index - 1; i++) {
    current = current.next;
  }

  current.next = current.next.next;
};
