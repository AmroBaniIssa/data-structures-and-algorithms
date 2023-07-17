'use strict';
const BinaryTree = require('../tree-max');
const Node = require('../Node');

let tree = null;

describe("Binary Tree", () => {
    beforeAll(() => {
        
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
    });
    it("constructor", () => {
        const newTree = new BinaryTree();
        expect(newTree.root).toBeNull();
        expect(tree.root.value).toEqual(1);
    });
    it('max', () => {
        let expectedOutput = 7;
        let max = tree.max();
        expect(max).toEqual(expectedOutput);
    });
    
})