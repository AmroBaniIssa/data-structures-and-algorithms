"use strict";
const Vertex = require("./Vertex");
const Edge = require("./Edge");
class Graph {
  constructor() {
    this.adjacencyList = new Map();
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
    }
  }

  getVertices() {
    // return this.adjacencyList.keys();
    const vertices = [];

    for (const vertex of this.adjacencyList.keys()) {
      vertices.push(vertex);
    }

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
console.log(myGraph.getNeighbors(zero));
console.log(myGraph.size());

// console.log("after", myGraph);

// for (const [k, v] of myGraph.adjacencyList.entries()) {
//   console.log("k=> ", k, "v=> ", v);
// }
