class Queue {
    constructor() {
      this.stack1 = [];
      this.stack2 = [];
    }
  
    enqueue(value) {
      this.stack1.push(value);
      this.stack2.push(value);
      console.log(this.stack1,this.stack2);
    }
  
    dequeue() {
      if (this.stack1.length === 0) {
          return "the stack1 is empty "; 
        }
        else{
            const element = this.stack1.pop();
            console.log(element);
        }


     if (this.stack2.length === 0) {
        return "the stack2 is empty "; 

      }
      else{
        const element = this.stack2.pop();
        console.log(element);
    }}
  
    isEmpty() {
      return this.stack1.length === 0 && this.stack2.length === 0;
    }
  
    size() {
      return this.stack1.length + this.stack2.length;
    }
  }
  
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(15);
queue.enqueue(20);
queue.dequeue();
