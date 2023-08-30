const NewTree = require('./tree-intersection')
const Node=require('./Node')



let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);

one.left = two;
one.right = three;
two.left = four;
two.right =five;
three.left = six;
three.right = seven;


tree = new BinaryTree(one);

let preOrder = tree.preOrder();
let inOrder = tree.inOrder();
let postOrder = tree.postOrder();
let traverseBreadthFirst = tree.traverseBreadth();


// implement the max function
let max = tree.max();

// implement the add and search functions
let add = tree.add(9);
let search = tree.search(3);



console.log('preOrder: ', preOrder);
console.log('inOrder: ', inOrder);
console.log('postOrder: ', postOrder);
console.log('traverseBreadthFirst: ', traverseBreadthFirst);
console.log('add: ', add);
console.log('search: ', search);
console.log('max: ', max);