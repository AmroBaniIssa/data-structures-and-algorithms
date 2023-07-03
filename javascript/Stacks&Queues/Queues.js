const Node = require('./Node.js');
 
class Queue {
    constructor() {
      this.front = null;
      this.rear = null;
    }
  
    enqueue(item) {
      let newNode = new Node(item);
  
      if (this.isEmpty()) {
        this.front = newNode;
        this.rear = newNode;
      } else {
        this.rear.next = newNode;
        this.rear = newNode;
      }
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
  
      let removedNode = this.front;
      this.front = this.front.next;
  
      if (this.front === null) {
        this.rear = null;
      }
  
      return removedNode.data;
    }
  
    peek() {
      if (this.isEmpty()) {
        return null;
      }
      return this.front.data;
    }
  
    isEmpty() {
      return this.front === null;
    }
  
    size() {
      let count = 0;
      let current = this.front;
      while (current !== null) {
        count++;
        current = current.next;
      }
      return count;
    }
  }
  