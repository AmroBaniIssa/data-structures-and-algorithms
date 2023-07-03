const Node = require('./Node.js');
  
  class Stack {
    constructor() {
      this.top = null;
    }
  
    push(item) {
      let newNode = new Node(item);
      if (this.top === null) {
        this.top = newNode;
      } else {
        newNode.next = this.top;
        this.top = newNode;
      }
    }
  
    pop() {
      if (this.isEmpty()) {
        return null;
      }
  
      let removedNode = this.top;
      this.top = this.top.next;
      return removedNode.data;
    }
  
    peek() {
      if (this.isEmpty()) {
        return null;
      }
      return this.top.data;
    }
  
    isEmpty() {
      return this.top === null;
    }
  
    size() {
      let count = 0;
      let current = this.top;
      while (current !== null) {
        count++;
        current = current.next;
      }
      return count;
    }
  }
 