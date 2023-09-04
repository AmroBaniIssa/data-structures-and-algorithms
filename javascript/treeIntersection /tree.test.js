const {NewTree,Node } = require('./tree');

describe('CommonValues', () => {
  it('should find common values', () => {
    const one = new NewTree(new Node(1)); 
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);

    one.root.left = two;
    one.root.right = three;
    two.left = four;
    three.left = five;

    const seven = new NewTree(new NewTree.Node(7));
    const six = new NewTree.Node(6);
    const eight = new NewTree.Node(8);

    seven.root.left = six;
    seven.root.right = five;
    six.right = four;
    five.right = eight;

    const result = NewTree.CommonValues(one, seven);

    const expected = [4, 5];

    expect(result).toEqual(expected);
  });
});
