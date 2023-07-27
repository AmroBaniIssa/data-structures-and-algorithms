const kAryTree=require('./k-ary-tree')
const Node=require('./Node')



let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);
let ten = new Node(10);


tree = new kAryTree(one);

tree.add(two);
tree.add(three);
tree.add(four);
tree.add(five);
tree.add(six);
tree.add(seven);
tree.add(eight);
tree.add(nine);
tree.add(ten);




let traverseBreadthFirst = tree.traverseBreadth();
let treeFfizzBuzz = tree.treeFfizzBuzz();








console.log('traverseBreadthFirst: ', traverseBreadthFirst);
console.log('treeFfizzBuzz: ', treeFfizzBuzz);

