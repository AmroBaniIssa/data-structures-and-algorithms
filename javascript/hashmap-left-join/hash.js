// const HashMap = require('../hashtable/hashtable');
// const LinkedList = require('../hashtable/linkedlist');

// function hasUniqueCharacters(str) {
//   const charMap = new HashMap(26);

//   str = str.toLowerCase().replace(/ /g, '');

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];

//     let charExists = false;
//     const hash = charMap.makeHash(char);
//     const linkedList = charMap.map[hash];

//     if (linkedList) {
//       const values = linkedList.print();
//       for (let j = 0; j < values.length; j++) {
//         const nodesInideLL = values[j];
//         if (nodesInideLL[char] !== undefined) {
//           charExists = true;
//           break;
//         }
//       }
//     }

//     if (charExists) {
//       return false;
//     }

//     if (!charMap.map[hash]) {
//       charMap.map[hash] = new LinkedList();
//     }
//     charMap.map[hash].append({ [char]: true });
//   }

//   return true;
// }




// console.log(hasUniqueCharacters("The quick brown fox jumps over the lazy dog")); 
// console.log(hasUniqueCharacters("I love cats")); 

