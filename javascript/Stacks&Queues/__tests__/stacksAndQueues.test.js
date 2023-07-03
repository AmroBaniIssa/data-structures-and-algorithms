const Stack = require('../Stacks');
const Queue = require('../Queues');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('can successfully push onto a stack', () => {
    stack.push(1);
    expect(stack.peek()).toBe(1);
  });

  test('can successfully push multiple values onto a stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.size()).toBe(3);
  });

  test('can successfully pop off the stack', () => {
    stack.push(1);
    stack.push(2);
    let poppedValue = stack.pop();
    expect(poppedValue).toBe(2);
    expect(stack.size()).toBe(1);
  });

  test('can successfully empty a stack after multiple pops', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  test('can successfully peek the next item on the stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
    expect(stack.size()).toBe(3);
  });

  test('can successfully instantiate an empty stack', () => {
    expect(stack.isEmpty()).toBe(true);
    expect(stack.size()).toBe(0);
  });

  test('calling pop on empty stack raises an exception', () => {
    expect(() => stack.pop()).toThrow('Stack is empty');
  });

  test('calling peek on empty stack raises an exception', () => {
    expect(() => stack.peek()).toThrow('Stack is empty');
  });
});

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test('can successfully enqueue into a queue', () => {
    queue.enqueue(1);
    expect(queue.peek()).toBe(1);
  });

  test('can successfully enqueue multiple values into a queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.size()).toBe(3);
  });

  test('can successfully dequeue out of a queue the expected value', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    let dequeuedValue = queue.dequeue();
    expect(dequeuedValue).toBe(1);
    expect(queue.size()).toBe(1);
  });

  test('can successfully peek into a queue, seeing the expected value', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek()).toBe(1);
    expect(queue.size()).toBe(3);
  });

  test('can successfully empty a queue after multiple dequeues', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });

  test('can successfully instantiate an empty queue', () => {
    expect(queue.isEmpty()).toBe(true);
    expect(queue.size()).toBe(0);
  });

  test('calling dequeue on empty queue raises an exception', () => {
    expect(() => queue.dequeue()).toThrow('Queue is empty');
  });

  test('calling peek on empty queue raises an exception', () => {
    expect(() => queue.peek()).toThrow('Queue is empty');
  });
});
