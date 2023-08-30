const Node = require("./Node");
const Hashmap = require('../hashtable/hashtable')

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
    console.log(tree1)
    console.log(tree2)
    for(let i=0; i<tree1.length; i++){
        const hash = makeHash(tree1[i]);

    }
    // const hashmap = {};
    // const commonValues = [];

    // inorderTraversal(root1, hashmap);

    // function findCommon(node) {
    //     if (node) {
    //         if (hashmap[node.value]) {
    //             commonValues.push(node.value);
    //         }
    //         findCommon(node.left);
    //         findCommon(node.right);
    //     }
    // }

    // findCommon(root2);
    // return commonValues;
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

seven.right =five;
seven.left = six;
five.right = eght;
six.right=one


tree1 = new NewTree(one);
tree2 = new NewTree(seven);


let preOrder1 = tree1.preOrder();
let preOrder2 = tree2.preOrder();

// console.log("tree1",preOrder1)
// console.log("tree2",preOrder2)


CommonValues(preOrder1,preOrder2)