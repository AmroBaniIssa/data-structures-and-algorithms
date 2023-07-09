const  {Animal,AnimalShelter} = require('./queue');

const animalQueue = new AnimalShelter();

const dog1 = new Animal('dog', 'Oliver');
const dog2 = new Animal('dog', 'buty');
const cat1 = new Animal('cat', 'Bella');
const cat2 = new Animal('cat', 'Luna');
const cat3 = new Animal('cat', 'Max');





animalQueue.enqueue(dog1);
animalQueue.enqueue(dog2);
animalQueue.enqueue(cat1);
animalQueue.enqueue(cat2);
animalQueue.enqueue(cat3);


console.log(animalQueue); 

console.log(animalQueue.dequeue('dog')); 
console.log(animalQueue.dequeue('cat')); 