const Hashmap = require("./hashtable");
const firstRepeatedWord = require("../hashmap-repeated-word/hashmap-repeated-word");
const leftJoin = require("../hashmap-left-join/hashmap-left-join");

describe("Hashmap Functionality", () => {
  let myHashmap;

  beforeEach(() => {
    myHashmap = new Hashmap(20);
  });

  it("should set a key and retrieve the value", () => {
    myHashmap.add("ahmad", "owner");
    expect(myHashmap.get("ahmad")).toBe("owner");
  });

  it("should return null if the key doesn't exist", () => {
    expect(myHashmap.get("sameeer")).toBeNull();
  });

  it("should return a list of all keys", () => {
    myHashmap.add("ahmad", "user");
    myHashmap.add("khaled", "owner");
    myHashmap.add("amro", "user");

    const keys = myHashmap.keys();
    expect(keys).toEqual(expect.arrayContaining(["ahmad", "khaled", "amro"]));
  });

  it("should handle collisions", () => {
    myHashmap.add("ahmad", "user");
    myHashmap.add("hamad", "user");

    expect(myHashmap.get("ahmad")).toBe("user");
    expect(myHashmap.get("hamad")).toBe("user");
  });

  it("should hash a key for the value", () => {
    const hashValue = myHashmap.hash("ahmad");
    expect(hashValue).toBeGreaterThanOrEqual(0);
    expect(hashValue).toBeLessThan(myHashmap.size);
  });

  it("should return the first repeated word", () => {
    const hashValue = firstRepeatedWord(
      "Once upon a time, there was a brave princess who..."
    );
    expect(hashValue).toEqual("a");
  });

  it("should return the values for the same key in two different hashmaps", () => {
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

    const valuesFromTwoHashmaps = leftJoin(hashmap1, hashmap2);
    expect(valuesFromTwoHashmaps).toEqual([
      ["diligent", "employed", "idle"],
      ["outfit", "garb", null],
      ["fond", "enamored", "averse"],
      ["guide", "usher", "follow"],
      ["wrath", "anger", "delight"],
    ]);
  });
});
