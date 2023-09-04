const Node = require("./Node");
const Hashmap = require("../hashtable/hashtable");
const LinkedList = require('../hashtable/linkedlist');
class NewTree {
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
}

function CommonValues(tree1, tree2) {
  // console.log(tree1);
  // console.log(tree2);
  const myHashmap = new Hashmap(20);
  const commons = [];

  // for (let i = 0; i < tree1.length; i++) {
  //   const hash = myHashmap.makeHash(tree1[i].toString());// my method (makeHash) take the value as string values only
  //   if (!myHashmap.map[hash]) {
  //     myHashmap.map[hash] = new LinkedList();
  //   }

  //   myHashmap.map[hash].append(tree1[i]);
  // }
  tree1.preOrder().forEach((value) => {
    const hash = myHashmap.makeHash(value.toString());
    if (!myHashmap.map[hash]) {
      myHashmap.map[hash] = new LinkedList();
    }
    myHashmap.map[hash].append(value);
  });

  // for (let i = 0; i < tree2.length; i++) {
  //   const hash = myHashmap.makeHash(tree2[i].toString());
  //   if (myHashmap.map[hash]) {
  //       commons.push(tree2[i]);
  //       myHashmap.map[hash].append(tree2[i]);
  //   } }
  tree2.preOrder().forEach((value) => {
    const hash = myHashmap.makeHash(value.toString());
    if (myHashmap.map[hash] && !commons.includes(value)) {
      commons.push(value);
    }
  });

    

console.log("commons",commons)


}

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eght = new Node(8);

one.left = two;
one.right = three;
two.left = four;

seven.right = five;
seven.left = six;
five.right = eght;
six.right = three;

tree1 = new NewTree(one);
tree2 = new NewTree(seven);

// let preOrder1 = tree1.preOrder();
// let preOrder2 = tree2.preOrder();

// console.log("tree1",preOrder1)
// console.log("tree2",preOrder2)

CommonValues(tree1, tree2);
module.exports = NewTree;