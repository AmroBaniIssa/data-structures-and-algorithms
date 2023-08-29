const Hashmap = require("./hashtable");

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
});
