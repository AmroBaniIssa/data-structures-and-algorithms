const stack=require('./Stacks')
class Queue {
    constructor() {
      this.stack1 = new stack;
      this.stack2 = new stack;
    }
  
    enqueue(value) {
      this.stack1.push(value);
      
    }
  
    dequeue() {
        const element = this.stack1.pop();
        console.log(element);
        const element2 = this.stack2.pop();
        console.log(element2);
    
    
      //if both stacks are empty, return undefined
      if (this.stack1.length === 0 && this.stack2.length === 0) {
          return undefined; 
        }
      //if stack2 is empty, pop all elements from stack1 to stack2 till stack1 is empty
     if (this.stack2.length === 0) {
      while (this.stack1.size() !== 0) {
        this.stack2.push(this.stack1.pop());
      }
      return this.stack2.pop();
      }
    
}
   
  }
  
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(15);
queue.enqueue(20);
console.log(queue.dequeue());
