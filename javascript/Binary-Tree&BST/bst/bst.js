"use strict";
const Node = require("./Node");
class BST {
  constructor(root = null) {
    this.root = root;
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
}

module.exports = BST;
