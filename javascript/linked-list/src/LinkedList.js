'use strict';
const Node = require('./Node');
class Linkedlist {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            //if the linkedlist is empty
            this.head = newNode;
            return this;
        }
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
        return this;
    }
    // INSERT AT THE BEGINING
    insert(value){
        const newNode=new Node(value);
        if (this.head===null){
            this.head=newNode;
            this.tail=newNode;
            return this;
        }
        else{
            newNode.next=this.head;
            this.head=newNode;
            this.tail=newNode;
        }

       
    }
    includes(value){
        let currentNode=this.head;
        while(currentNode!==null){
            if(currentNode.value===value){
                return true;
            }
            currentNode=currentNode.next;
        }
        return false;
    }

    print(){
        let currentNode=this.head;
        while(currentNode!==null){
            console.log(currentNode.value);
            currentNode=currentNode.next;
        }
    }


    
}

module.exports = Linkedlist;