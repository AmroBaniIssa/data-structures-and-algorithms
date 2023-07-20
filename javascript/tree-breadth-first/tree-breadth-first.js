
const  Queue = require('../Stacks&Queues/Queues');

const queue = new Queue();


class treeNode {
    constructor(root = null) {
        this.root = root;
    }
    traverseBreadth(){
        let result=[];
        let traverse=(node)=>{
            if (node !== null) {
                queue.enqueue(node)
              }
           
            if(node.left){
                traverse(node.left)
                let x= queue.dequeue(node)
                result.push(x.value)

            } 
            if (node.right){
                traverse(node.right)            
                let y= queue.dequeue(node)
                result.push(y.value)
            }
        } 
        traverse(this.root);
        return result;
    }
}

module.exports = treeNode;
