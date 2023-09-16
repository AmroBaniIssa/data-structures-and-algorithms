const Graph = require("./Graphs");
describe("Graph", () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  it("add a vertex", () => {
    const vertex = graph.addVertex("A");
    expect(graph.getVertices()).toEqual(["A"]);
  });

  it("add an edge", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addDirectedEdge("A", "B", 1);
    expect(graph.getNeighbors("A")).toEqual([{ vertex: "B", weight: 1 }]);
  });

  it("retrieve all vertices", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    expect(graph.getVertices()).toEqual(["A", "B", "C"]);
  });

  it("retrieve all neighbors", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addDirectedEdge("A", "B", 1);
    graph.addDirectedEdge("A", "C", 2);
    expect(graph.getNeighbors("A")).toEqual([
      { vertex: "B", weight: 1 },
      { vertex: "C", weight: 2 },
    ]);
  });

  it(" size of graph ", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    expect(graph.size()).toEqual(3);
  });
  it("Testing breadth first", () => {
    const myGraph = new Graph();
    myGraph.addVertex(1);
    myGraph.addVertex(2);
    myGraph.addVertex(3);
    myGraph.addVertex(4);
    myGraph.addVertex(5);
    myGraph.addDirectedEdge(1, 2);
    myGraph.addDirectedEdge(1, 3);
    myGraph.addDirectedEdge(2, 3);
    myGraph.addDirectedEdge(2, 4);
    myGraph.addDirectedEdge(4, 5);
    myGraph.addDirectedEdge(5, 3);
    expect(myGraph.breadthFirst(1)).toEqual(new Set([1, 2, 3, 4, 5]));
  });

  it("Testing depth first", () => {
    const myGraph = new Graph();
    myGraph.addVertex(A);
    myGraph.addVertex(B);
    myGraph.addVertex(C);
    myGraph.addVertex(D);
    myGraph.addVertex(E);
    myGraph.addVertex(F);
    myGraph.addVertex(G);
    myGraph.addVertex(H);
    myGraph.addDirectedEdge(A, D);
    myGraph.addDirectedEdge(A, B);
    myGraph.addDirectedEdge(B, D);
    myGraph.addDirectedEdge(D, F);
    myGraph.addDirectedEdge(D, H);
    myGraph.addDirectedEdge(D, E);
    myGraph.addDirectedEdge(B, C);
    myGraph.addDirectedEdge(C, G);
    myGraph.addDirectedEdge(F, H);
    expect(myGraph.breadthFirst(A)).toEqual([A,B,C,G,D,E,H,F]);
  });

  it("Testing the trip path ", () => {
    const businessGraph = new Graph();
    businessGraph.addVertex(Pandora);
    businessGraph.addVertex(Arendelle);
    businessGraph.addVertex(Monstropolis);
    businessGraph.addVertex(Naboo);
    businessGraph.addVertex(Narnia);
    businessGraph.addVertex(Metroville);
    businessGraph.addDirectedEdge(Pandora, Arendelle, 150);
    businessGraph.addDirectedEdge(Pandora, Metroville, 82);
    businessGraph.addDirectedEdge(Arendelle, Monstropolis, 42);
    businessGraph.addDirectedEdge(Arendelle, Metroville, 99);
    businessGraph.addDirectedEdge(Metroville, Monstropolis, 105);
    businessGraph.addDirectedEdge(Metroville, Naboo, 26);
    businessGraph.addDirectedEdge(Metroville, Narnia, 37);
    businessGraph.addDirectedEdge(Naboo, Monstropolis, 73);
    businessGraph.addDirectedEdge(Naboo, Narnia, 250);

    expect(businessTrip(businessGraph, ["Metroville", "Pandora"])).toEqual(82);
  });
});
