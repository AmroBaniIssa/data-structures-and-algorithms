"use strict";
const LinkedList = require("../src/LinkedList");
describe("linked list", () => {
  it("create a linkedlist ", () => {
    let list = new LinkedList();
    expect(list.head).toBeNull();
  });
  it("append to linkedlist", () => {
    let list = new LinkedList();
    list.append("one");
    expect(list.head.value).toEqual("one");
    list.append("two");
    expect(list.head.value).toEqual("one");
  });
  it("should successfully add a node to the end of the linked list", () => {
    let list = new LinkedList();
    list.append("one");
    expect(list.head.value).toEqual("one");
  });
  it("should successfully add multiple nodes to the end of a linked list", () => {
    let list = new LinkedList();
    list.append("one");
    list.append("two");
    list.append("three");

    expect(list.head.value).toEqual("one");
    expect(list.head.next.value).toEqual("two");
    expect(list.head.next.next.value).toEqual("three");
  });
  it("should successfully insert a node before a node located in the middle of a linked list", () => {
    let list = new LinkedList();
    list.append("one");
    list.append("three");
    list.insertBefore("three", "two");

    expect(list.head.value).toEqual("one");
    expect(list.head.next.value).toEqual("two");
    expect(list.head.next.next.value).toEqual("three");
  });
  it("should successfully insert a node before the first node of a linked list", () => {
    let list = new LinkedList();
    list.append("one");
    list.insertBefore("one", "new");

    expect(list.head.value).toEqual("new");
    expect(list.head.next.value).toEqual("one");
  });
  it("should successfully insert a node after a node in the middle of the linked list", () => {
    let list = new LinkedList();
    list.append("one");
    list.append("three");
    list.insertAfter("one", "two");

    expect(list.head.value).toEqual("one");
    expect(list.head.next.value).toEqual("two");
    expect(list.head.next.next.value).toEqual("three");
  });
  it("should successfully insert a node after the last node of the linked list", () => {
    let list = new LinkedList();
    list.append("one");
    list.insertAfter("one", "two");

    expect(list.head.value).toEqual("one");
    expect(list.head.next.value).toEqual("two");
  });
   
  it("should return the correct value when k is greater than the length of the linked list", () => {
    const list = new LinkedList();
    list.append("one");
    expect(() => list.kthFromEnd(5)).toThrowError(
      new Error("k is greater than or equal to the length of the list")
    );
  });
  it("should return the correct value when k and the length of the list are the same", () => {
    const list = new LinkedList();
    list.append("one");
    list.append("two");
    list.append("three");
    expect(list.kthFromEnd(3)).toBe("one");
  });
  it("should throw an error when k is not a positive integer", () => {
    const list = new LinkedList();
    expect(() => list.kthFromEnd(-2)).toThrowError(
      new Error("Invalid k value or empty list")
    );
  });
  it("should return the correct value when the linked list is of size 1", () => {
    let list = new LinkedList();
    list.append("5");
    expect(list.kthFromEnd(0)).toBe("5");
  });
  
});
