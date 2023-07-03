const Node = require('./Node');
 
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
        // return null;
        throw new Error("Queue is empty");
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
        throw new Error("Queue is empty");

        // return null;
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
  module.exports = Queue;
