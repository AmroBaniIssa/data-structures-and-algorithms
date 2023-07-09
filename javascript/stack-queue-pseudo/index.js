const  {Queue} = require('./stack-queue-pseudo');

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(15);
queue.enqueue(20);
console.log(queue.dequeue());