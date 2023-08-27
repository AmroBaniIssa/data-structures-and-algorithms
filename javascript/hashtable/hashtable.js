"use strict";
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
  // returning the all the values  from the linkedList
  print() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}
class Hashmap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }
  makeHash(key) {
    const asciiCodeSum = key.split("").reduce((acc, char) => {
      return acc + char.charCodeAt();
    }, 0);
    const multiPrime = asciiCodeSum * 599;
    const theIndex = multiPrime % this.size;
    return theIndex;
  }
  add(key, value) {
    const hash = this.makeHash(key);
    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }

    this.map[hash].append({ [key]: value });
  }

  get(key) {
    const hash = this.makeHash(key);
    const linkedList = this.map[hash];

    if (linkedList) {
      const values = linkedList.print();
      // console.log("valuesss",values);
      for (let i = 0; i < values.length; i++) {
        const nodesInideLL = values[i];
        if (nodesInideLL[key] !== undefined) {
          return nodesInideLL[key];
        }
      }
    } else {
      console.log(`Key '${key}' not found in the table.`);
    }
  }

  has(key) {
    const hash = this.makeHash(key);
    const linkedList = this.map[hash];

    if (linkedList) {
      const values = linkedList.print();
      // console.log("valuesss",values);
      for (let i = 0; i < values.length; i++) {
        const nodesInideLL = values[i];
        if (nodesInideLL[key] !== undefined) {
          return true;
        }
      }
    } else {
      return false;
    }

    return false;
  }

  keys() {
    const allKeys = [];

    this.map.forEach((linkedList) => {
      if (linkedList) {
        const values = linkedList.print();
        // console.log("valuesss",values);
        for (let i = 0; i < values.length; i++) {
          const keys = Object.keys(values[i]);
          allKeys.push(keys);
        }
      }
    });

    // return allKeys.join();
    return allKeys.flat();
  }

  hash(key) {
    return this.makeHash(key);
  }
}

const myHashmap = new Hashmap(8);


myHashmap.add("ahmad", "user");
myHashmap.add("amal", "owner");
myHashmap.add("sami", "user");
myHashmap.add("amro", "owner");
myHashmap.add("sameer", "admin");
myHashmap.add("khaled", "admin");



console.log(myHashmap.get("ahmad"));
console.log(myHashmap.get("amal"));
console.log(myHashmap.get("amro"));

console.log(myHashmap.has("fatimah"));
console.log(myHashmap.has("amro"));

console.log(myHashmap.keys());
