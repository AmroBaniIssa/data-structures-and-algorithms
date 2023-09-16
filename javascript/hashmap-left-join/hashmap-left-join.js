const HashMap = require("../hashtable/hashtable");

function leftJoin(hashmap1, hashmap2) {
  let result = [];
  let valueFromHashmap1;
  let valueFromHashmap2;

  let keysFromHash1 = hashmap1.keys();

  for (let i = 0; i < keysFromHash1.length; i++) {
    valueFromHashmap1 = hashmap1.get(keysFromHash1[i]);

    if (hashmap2.has(keysFromHash1[i])) {
      valueFromHashmap2 = hashmap2.get(keysFromHash1[i]);
    } else {
      valueFromHashmap2 = null;
    }
    result.push([keysFromHash1[i], valueFromHashmap1, valueFromHashmap2]);
  }

  return result;
}

const hashmap1 = new HashMap(1024);
const hashmap2 = new HashMap(1024);

hashmap1.add("diligent", "employed");
hashmap1.add("fond", "enamored");
hashmap1.add("guide", "usher");
hashmap1.add("outfit", "garb");
hashmap1.add("wrath", "anger");

hashmap2.add("diligent", "idle");
hashmap2.add("fond", "averse");
hashmap2.add("guide", "follow");
hashmap2.add("flow", "jam");
hashmap2.add("wrath", "delight");

console.log(leftJoin(hashmap1, hashmap2));

module.exports =  leftJoin ;
