const BST=require('./bst')
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


tree = new BST(one);

let add = tree.add(9);
let search = tree.search(3);


console.log('add: ', add);
console.log('search: ', search);