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

  repeatedWord(String) {
    const words = String.toLowerCase().split(/\s+|,/); //=============================== this to split at every space and egnoring commas
    // console.log("allllllllllll",words);
    for (let i = 1; i < words.length; i++) {
      // console.log("eachword",words[i]);
      // const hash = this.makeHash(words[i]);
      this.add(words[i], words[i]);
    }

    let repeated = [];
    this.map.forEach((linkedList) => {
      const allWordes = []; // =========================================================this to put all words in each linkedlist in one array
      if (linkedList) {
        const values = linkedList.print();
        // console.log("valuesss", values);
        for (let i = 0; i < values.length; i++) {
          const wordsInLL = Object.values(values[i]);
          allWordes.push(wordsInLL);
        }
        let allWordeAtOneLinkedList = allWordes.flat();
        // console.log("jaskaajlsaskj,", allWordeAtOneLinkedList);
        // const wordsArray = allWordeAtOneLinkedList;

        //==============================================================================this to checke if there is a repeted wordes in the array
        const wordsArray = {};
        let foundRepeatedWord = false;
        // console.log("hhhhhhhhhhhhhhhhhhhh", wordsArray);
        for (let i = 0; i < allWordeAtOneLinkedList.length; i++) {
          const element = allWordeAtOneLinkedList[i];
          // console.log("the array", wordsArray);
          // console.log(Object.values(values[i]).join());
          if (element === "") {
            continue; // Skip empty strings
          }
          if (wordsArray[element]) {
            foundRepeatedWord = true;
            console.log(`"${element}" is the repeated element`);
            repeated.push(element);
            break;
          }
          // if (wordsArray.includes(Object.values(values[i]).join())) {
          //   console.log(values[i], "we Found a repeated element");
          // }
          else {
            wordsArray[element] = true;
            // console.log("foooooooooooooooooooooooooooooooolse");
          }
        }
      }
    });
  }
}

const myHashmap = new Hashmap(8);

// myHashmap.add("ahmad", "user");
// myHashmap.add("amal", "owner");
// myHashmap.add("sami", "user");
// myHashmap.add("amro", "owner");
// myHashmap.add("sameer", "admin");
// myHashmap.add("khaled", "admin");
// myHashmap.repeatedWord(
// console.log(myHashmap.get("ahmad"));
// console.log(myHashmap.get("amal"));
// console.log(myHashmap.get("amro"));
// console.log(myHashmap.has("fatimah"));
// console.log(myHashmap.has("amro"));
// console.log(myHashmap.keys());


//   "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didnt know what I doing in New York..."
// );
myHashmap.repeatedWord("Once upon a time, there was a brave princess who...");