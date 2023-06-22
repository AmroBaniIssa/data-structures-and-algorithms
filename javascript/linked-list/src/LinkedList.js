"use strict";
const Node = require("./Node");
class Linkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      //if the linkedlist is empty
      this.head = newNode;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    return this;
  }

  //append to the end of the list
  appendToEnd(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  // INSERT AT THE BEGINING
  insert(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.tail = newNode;
    }
  }
  insertBefore(value, newValue) {
    const newNode = new Node(newValue);
    if (!this.head) {
      return; // No nodes in the linked list
    }

    if (this.head.value === value) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  insertAfter(value, newValue) {
    const newNode = new Node(newValue);
    if (!this.head) {
      return; // No nodes in the linked list
    }

    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        if (currentNode === this.tail) {
          this.tail = newNode;
        }
        return;
      }
      currentNode = currentNode.next;
    }
  }

  includes(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  kthFromEnd(k) {
    if (!Number.isInteger(k) || k < 0) {
      throw new Error("Invalid k value or empty list");
    }
  
    let fastPtr = this.head;
    let slowPtr = this.head;
  
    for (let i = 0; i < k; i++) {
      if (fastPtr === null) {
        throw new Error("k is greater than or equal to the length of the list");
      }
      fastPtr = fastPtr.next;
    }
  
    while (fastPtr && fastPtr.next !== null) {
      fastPtr = fastPtr.next;
      slowPtr = slowPtr.next;
    }
  
    return slowPtr.value;
  }
  

  print() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

module.exports = Linkedlist;
