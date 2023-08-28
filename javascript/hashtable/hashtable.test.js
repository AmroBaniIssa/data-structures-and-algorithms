const Hashmap = require("./hashtable"); 
const assert = require("assert");

describe("Hashmap Functionality", () => {
    let myHashmap;

    beforeEach(() => {
        myHashmap = new Hashmap(8);
    });

    it("should set a key and retrieve the value", () => {
        myHashmap.add("apple", "red");
        assert.strictEqual(myHashmap.get("apple"), "red");
    });

    it("should return null if the keydoesn't exist", () => {
        assert.strictEqual(myHashmap.get("banana"), null);
    });

    it("should return a list of all unique keys", () => {
        myHashmap.add("apple", "red");
        myHashmap.add("banana", "yellow");
        myHashmap.add("cherry", "red");

        const keys = myHashmap.keys();
        assert.deepStrictEqual(keys, ["apple", "banana", "cherry"]);
    });

    it("should handle collisions", () => {
        // Assuming your hash function generates collisions for "apple" and "banana"
        myHashmap.add("apple", "fruit");
        myHashmap.add("banana", "fruit");

        assert.strictEqual(myHashmap.get("apple"), "fruit");
        assert.strictEqual(myHashmap.get("banana"), "fruit");
    });

    it("should retrieve a value from a collision bucket", () => {
        // Assuming your hash function generates a collision for "apple" and "banana"
        myHashmap.add("apple", "fruit");
        myHashmap.add("banana", "fruit");

        // This will retrieve from the same bucket
        assert.strictEqual(myHashmap.get("banana"), "fruit");
    });

    it("should hash a key to an in-range value", () => {
        const hashValue = myHashmap.hash("apple");
        assert.ok(hashValue >= 0 && hashValue < myHashmap.size);
    });
});
