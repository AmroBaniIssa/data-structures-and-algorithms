const Graph = require('./Graphs'); 
describe('Graph', () => {
    let graph;
  
    beforeEach(() => {
      graph = new Graph();
    });
  
    it('can successfully add a vertex', () => {
      const vertex = graph.addVertex('A');
      expect(graph.getVertices()).toEqual(['A']);
    });
  
    it('can successfully add an edge', () => {
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addDirectedEdge('A', 'B', 1);
      expect(graph.getNeighbors('A')).toEqual([{ vertex: 'B', weight: 1 }]);
    });
  
    it('can properly retrieve a collection of all vertices', () => {
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addVertex('C');
      expect(graph.getVertices()).toEqual(['A', 'B', 'C']);
    });
  
    it('can properly retrieve all appropriate neighbors', () => {
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addVertex('C');
      graph.addDirectedEdge('A', 'B', 1);
      graph.addDirectedEdge('A', 'C', 2);
      expect(graph.getNeighbors('A')).toEqual([{ vertex: 'B', weight: 1 }, { vertex: 'C', weight: 2 }]);
    });
  
    it('neighbors are returned with the weight between vertices included', () => {
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addDirectedEdge('A', 'B', 1);
      expect(graph.getNeighbors('A')).toEqual([{ vertex: 'B', weight: 1 }]);
    });
  
    it('the proper size is returned, representing the number of vertices in the graph', () => {
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addVertex('C');
      expect(graph.size()).toEqual(3);
    });
  
    it('a graph with only one vertex and edge can be properly returned', () => {
      graph.addVertex('A');
      graph.addDirectedEdge('A', 'B', 1);
      expect(graph.getVertices()).toEqual(['A']);
      expect(graph.getNeighbors('A')).toEqual([{ vertex: 'B', weight: 1 }]);
      expect(graph.size()).toEqual(1);
    });
  });
  