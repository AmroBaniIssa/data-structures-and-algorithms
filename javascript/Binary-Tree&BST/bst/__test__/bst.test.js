'use strict';
const BST = require('../bst');
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
        const newTree = new BST();
        expect(newTree.root).toBeNull();
        expect(tree.root.value).toEqual(1);
    });
    it('add', () => {
        let expectedOutput = 9;
        let preOrder = tree.add(9);
        expect(preOrder).toEqual(expectedOutput);
    });
    it('search', () => {
        let expectedOutput = [3];
        let inOrder = tree.inOrder();
        expect(inOrder).toEqual(expectedOutput);
    });
    
})