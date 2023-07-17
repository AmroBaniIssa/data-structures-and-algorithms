'use strict';
class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    max(){
        let max=0;
        let traverse=(node)=>{
            if(node.value>=max){
                max=node.value;
            }
            if(node.left) traverse(node.left)
            if (node.right) traverse(node.right)            
        } 
        traverse(this.root);
        return max;
    }
  }

module.exports = BinaryTree;