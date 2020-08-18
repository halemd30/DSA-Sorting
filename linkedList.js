class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertBefore(item, itemAfter) {
    if (!this.head) {
      return null;
    }

    let currNode = this.head;
    let prevNode = this.head;
    console.log(currNode);
    console.log(prevNode);

    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    while (currNode !== null && currNode.value !== itemAfter) {
      // Save the previous node
      prevNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    let newNode = new _Node(item);
    newNode.next = currNode;
    prevNode.next = newNode;
  }

  insertAfter(item, itemBefore) {
    let currNode = this.head;
    let nextNode = this.head;

    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    while (currNode !== null && currNode.value !== itemBefore) {
      // Save the previous node
      currNode = currNode.next;
      nextNode = currNode.next.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    let newNode = new _Node(item);
    newNode.next = nextNode;
    currNode.next = newNode;
  }

  insertAt(item, position) {
    let currNode = this.head;
  }

  insertLast(item) {
    console.log(item);
    console.log(this.head);
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      console.log(tempNode.next);
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    previousNode.next = currNode.next;
  }

  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
    and the item is not on the list */
      if (currNode.next === null) {
        return null;
      } else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }
}

function main() {
  const SLL = new LinkedList();

  SLL.insertFirst("Apollo");
  SLL.insertBefore("hello", "Apollo");
  SLL.insertLast("Boomer");
  SLL.insertLast("Helo");
  // SLL.insertLast("Husker");
  // SLL.insertLast("Starbuck");
  // SLL.insertLast("Tauhida");
  // SLL.remove("Husker");
  console.log(SLL);
}
main();
//console.log(main());
