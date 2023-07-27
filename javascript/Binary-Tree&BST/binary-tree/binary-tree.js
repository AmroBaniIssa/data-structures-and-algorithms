"use strict";

const Queue = require("../../Stacks&Queues/Queues");
const Node = require("./Node");
class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  preOrder() {
    let result = [];
    let traverse = (node) => {
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }
  inOrder() {
    let result = [];
    let traverse = (node) => {
      if (node.left) traverse(node.left);
      result.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }
  postOrder() {
    let result = [];
    let traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value);
    };
    traverse(this.root);
    return result;
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

      if (x.left) {
        // traverse(node.left);
        queue.enqueue(x.left);
        // let x = queue.dequeue(node);
        // result.push(x.value);
      }
      if (x.right) {
        // traverse(node.right);
        queue.enqueue(x.right);
  
        //   let y = queue.dequeue(node);
        //   result.push(y.value);
      }
    }

    //  console.log(node.value)

    //   let x = queue.dequeue(node);
    //   result.push(x.value);
    // };
    // traverse(this.root);
    return result;
  }

  add(value) {
    let newNode = new Node(value);
    let traverse = (node) => {
      if (node === null) {
        return;
      }
      if (node.value > value) {
        traverse(node.left);
        if (node.right === null) {
          node.right = newNode;
        }
      }

      if (node.value < value) {
        traverse(node.right);
        if (node.left === null) {
          node.left = newNode;
        }
      }
    };
    traverse(this.root);
    return newNode.value;
  }

  search(value) {
    let result = [];
    let traverse = (node) => {
      //   if (node === null) {
      //     return;
      //   }
      if (node.value > value) {
        traverse(node.left);
        if ((node.value = value)) {
          result.push(node.value);
          console.log("value is in the tree:", node.value);
        } else {
          console.log("value is not in the tree");
        }
      }
      if (node.value < value) {
        traverse(node.right);
        if ((node.value = value)) {
          result.push(node.value);
          console.log("value is in the tree:", node.value);
        } else {
          console.log("value is not in the tree");
        }
      }
    };
    traverse(this.root);
    return result;
  }

  max() {
    let max = 0;

    if (!this.root) {
      return null;
    }

    let traverse = (node) => {
      if (node.value >= max) {
        max = node.value;
      }
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return max;
  }
}

module.exports = BinaryTree;
