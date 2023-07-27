"use strict";

const Queue = require("../Stacks&Queues/Queues");
const Node = require("./Node");
class kAryTree {
  constructor(root = null) {
    // let node = new Node(root);
    this.root = root;
  }

  add(node) {
    // Add a child node to the current node
    let y = new Node(node);
    // if (this.children.length < 5) {
    // console.log(this)
    this.root.children.push(y);
    // }
  }

  traverseBreadth() {
    if (!this.root) {
      return null;
    }

    let result = [];
    // let traverse = (node) => {
    const queue = new Queue();
    queue.enqueue(this.root);

    while (!queue.isEmpty()) {
      let x = queue.dequeue();
      result.push(x.value);
      console.log(result);
      // if(x.children){

      for (let i = 0; i < x.children.length; i++) {
        queue.enqueue(x.children[i]);
      }
      // }

      // if (x.left) {
      //   // traverse(node.left);
      //   queue.enqueue(x.left);
      //   // let x = queue.dequeue(node);
      //   // result.push(x.value);
      // }
    }

    return result;
  }

  treeFfizzBuzz() {
    if (!this.root) {
      return null;
    }

    let result = [];
    // let traverse = (node) => {
    const queue = new Queue();
    queue.enqueue(this.root);

    while (!queue.isEmpty()) {
      let x = queue.dequeue();
      result.push(x);
      // console.log('result>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',result);
      // if(x.children){

      for (let i = 0; i < x.children.length; i++) {
        if (x.children[i].value / 3 === 0) {
          x.children[i].value = "Fizz";
          console.log("/3333333333333", x.children[i].value);
          queue.enqueue(x.children[i]);
        }
        if (x.children[i].value / 5 === 0) {
          x.children[i].value = "Buzz";
          console.log("/5555555555555555", x.children[i].value);

          queue.enqueue(x.children[i]);
        }
        if (x.children[i].value / 3 === 0 && x.children[i].value / 5) {
          x.children[i].value = "FizzBuzz";
          queue.enqueue(x.children[i]);
        } else {
          console.log(x.children[i].value);

          x.children[i].value = x.children[i].value.toString();
          queue.enqueue(x.children[i]);
        }
      }
      // }

      // if (x.left) {
      //   // traverse(node.left);
      //   queue.enqueue(x.left);
      //   // let x = queue.dequeue(node);
      //   // result.push(x.value);
      // }
    }

    return result;
  }
}

module.exports = kAryTree;
