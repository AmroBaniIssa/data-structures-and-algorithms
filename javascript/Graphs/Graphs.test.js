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
});
