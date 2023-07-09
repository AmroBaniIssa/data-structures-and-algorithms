
const Node = require('./Node');

class Animal {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }
}

class AnimalShelter {
  constructor() {
    this.queue = [];
    this.dogQueue = [];
    this.catQueue = [];
  }

  enqueue(animal) {
    this.queue.push(animal);
    if (animal.species === 'dog') {
      this.dogQueue.push(animal);
    } else if (animal.species === 'cat') {
      this.catQueue.push(animal);
    }
  }

  dequeueOldestAnimal() {
    if (this.queue.length === 0) {
      return null;
    }

    const oldestAnimal = this.queue.shift();
    if (oldestAnimal.type === 'dog') {
      this.dogQueue.shift();
    } else if (oldestAnimal.type === 'cat') {
      this.catQueue.shift();
    }

    return oldestAnimal;
  }

  //dequeue with specific pref
  dequeue(pref) {
    if (pref === 'dog') {
      return this.dogQueue.shift() || null;
    } else if (pref === 'cat') {
      return this.catQueue.shift() || null;
    } else {
      return null;
    }
  }
}
module.exports = {Animal,AnimalShelter};