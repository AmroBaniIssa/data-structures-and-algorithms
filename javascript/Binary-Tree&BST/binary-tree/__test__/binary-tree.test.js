'use strict';
const BinaryTree = require('../binary-tree');
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
    it('preOrder', () => {
        let expectedOutput = [ 1, 2, 4, 5,3, 6, 7];
        let preOrder = tree.preOrder();
        expect(preOrder).toEqual(expectedOutput);
    });
    it('inOrder', () => {
        let expectedOutput = [4, 2, 5, 1,6, 3, 7];
        let inOrder = tree.inOrder();
        expect(inOrder).toEqual(expectedOutput);
    });
    it('postOrder', () => {
        let expectedOutput = [ 4, 5, 2, 6,7, 3, 1];
        let postOrder = tree.postOrder();
        expect(postOrder).toEqual(expectedOutput);
    });
   
    // test for add and search
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

    // test for tree max
    it('max', () => {
        let expectedOutput = 7;
        let max = tree.max();
        expect(max).toEqual(expectedOutput);
    });

})