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
});
