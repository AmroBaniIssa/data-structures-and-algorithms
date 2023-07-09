const  {Animal,AnimalShelter} = require('./queue');

const animalQueue = new AnimalShelter();

const dog1 = new Animal('dog', 'Buddy');
const dog2 = new Animal('dog', 'buty');
const cat1 = new Animal('cat', 'caty');
const cat2 = new Animal('cat', 'Smokey');
const cat3 = new Animal('cat', 'candy');
const notDogOrCat = new Animal('bird', 'noname');





animalQueue.enqueue(dog1);
animalQueue.enqueue(dog2);
animalQueue.enqueue(cat1);
animalQueue.enqueue(cat2);
animalQueue.enqueue(cat3);
animalQueue.enqueue(notDogOrCat);


console.log(animalQueue); 

console.log(animalQueue.dequeue('dog')); 
console.log(animalQueue.dequeue('cat')); 