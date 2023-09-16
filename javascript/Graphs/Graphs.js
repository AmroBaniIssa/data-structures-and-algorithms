"use strict";
const Vertex = require("./Vertex");
const Edge = require("./Edge");
class Graph {
  constructor() {
    this.adjacencyList = new Map();
    this.edges = [];
  }
  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
    return vertex;
  }
  addDirectedEdge(start, end, weight) {
    if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
      console.log(`vertex does not exist`);
      return;
    } else {
      const adjacencies = this.adjacencyList.get(start);
      let edge = new Edge(end, weight);
      adjacencies.push(edge);
      this.edges.push({ start, end, weight });
    }
  }

  getVertices() {
    // return this.adjacencyList.keys();
    const vertices = [];

    for (const vertex of this.adjacencyList.keys()) {
      vertices.push(vertex);
    }
    console.log("/////////", this.edges);
    return vertices;
  }

  getNeighbors(vertex) {
    if (this.adjacencyList.has(vertex)) {
      const result = [];
      const Vertices = this.adjacencyList.get(vertex).entries();

      for (const [key, edge] of Vertices) {
        result.push([{ vertex: edge.vertex.value, weight: edge.weight }]);
      }

      return result;
    } else {
      return [];
    }
  }

  size() {
    return this.adjacencyList.size;
  }

  breadthFirst(start) {
    if (this.adjacencyList.size === 0) {
      return "Empty graph";
    }
    if (!this.adjacencyList.has(start)) {
      return null;
    }
    let queue = [];
    let visited = new Set();
    let current;
    queue.push(start);
    visited.add(start);
    while (queue.length) {
      let front = queue.shift();
      current = this.adjacencyList.get(front);
      current.forEach((neighbor) => {
        if (!visited.has(neighbor.vertex)) {
          queue.push(neighbor.vertex);
          visited.add(neighbor.vertex);
        }
      });
    }

    return visited;
  }

  depthFirst(start) {
    if (this.adjacencyList.size === 0) {
      return "Empty graph";
    }
    if (!this.adjacencyList.has(start)) {
      return null;
    }
    let stack = [];
    let visited = new Set();
    const result = [];
    let current;
    stack.push(start);
    visited.add(start);
    while (stack.length) {
      let front = stack.pop();
      result.push(front);
      // the main difference between Breadth-first and depth-first is that
      // Breadth-first search we explores all neighbors of a vertex before pushing it to the result.
      // while  Depth-First we push vertices in to result befoor explores other neighbors,
      // so we go as deep as possible before backtracking.
      current = this.adjacencyList.get(front);
      current.forEach((neighbor) => {
        if (!visited.has(neighbor.vertex)) {
          stack.push(neighbor.vertex);
          visited.add(neighbor.vertex);
        }
      });
    }

    return result;
  }
}
module.exports = Graph;

const zero = new Vertex(0);
const one = new Vertex(1);
const two = new Vertex(2);
const three = new Vertex(3);
const four = new Vertex(4);
const five = new Vertex(5);

const myGraph = new Graph();

myGraph.addVertex(zero);
myGraph.addVertex(one);
myGraph.addVertex(two);
myGraph.addVertex(three);
myGraph.addVertex(four);
myGraph.addVertex(five);

// console.log(myGraph);

myGraph.addDirectedEdge(zero, five);
myGraph.addDirectedEdge(zero, three);
myGraph.addDirectedEdge(three, one);
myGraph.addDirectedEdge(four, one);
myGraph.addDirectedEdge(two, three);
myGraph.addDirectedEdge(zero, two);
myGraph.addDirectedEdge(five, four);

console.log(myGraph.getVertices());
// console.log(myGraph.getNeighbors(zero));
// console.log(myGraph.size());
console.log("breadth First", myGraph.breadthFirst(zero));
console.log("depth First", myGraph.depthFirst(zero));

// console.log("after", myGraph);

// for (const [k, v] of myGraph.adjacencyList.entries()) {
//   console.log("k=> ", k, "v=> ", v);
// }

const A = new Vertex("A");
const B = new Vertex("B");
const C = new Vertex("C");
const D = new Vertex("D");
const E = new Vertex("E");
const F = new Vertex("F");
const G = new Vertex("G");
const H = new Vertex("H");

const NEWEXAMPLE = new Graph();

NEWEXAMPLE.addVertex(A);
NEWEXAMPLE.addVertex(B);
NEWEXAMPLE.addVertex(C);
NEWEXAMPLE.addVertex(D);
NEWEXAMPLE.addVertex(E);
NEWEXAMPLE.addVertex(F);
NEWEXAMPLE.addVertex(G);
NEWEXAMPLE.addVertex(H);

// console.log(NEWEXAMPLE);

NEWEXAMPLE.addDirectedEdge(A, D);
NEWEXAMPLE.addDirectedEdge(A, B);
NEWEXAMPLE.addDirectedEdge(B, D);
NEWEXAMPLE.addDirectedEdge(D, F);
NEWEXAMPLE.addDirectedEdge(D, H);
NEWEXAMPLE.addDirectedEdge(D, E);
NEWEXAMPLE.addDirectedEdge(B, C);
NEWEXAMPLE.addDirectedEdge(C, G);
NEWEXAMPLE.addDirectedEdge(F, H);

console.log("breadthFirst", NEWEXAMPLE.breadthFirst(A));
console.log("depth", NEWEXAMPLE.depthFirst(A));
