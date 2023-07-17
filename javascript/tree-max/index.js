const BinaryTree=require('./tree-max')
const Node=require('./Node')



let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(9);
let six = new Node(6);
let seven = new Node(7);

one.left = two;
one.right = three;
two.left = four;
two.right =five;
three.left = six;
three.right = seven;


tree = new BinaryTree(one);

let max = tree.max();



console.log('max: ', max);

