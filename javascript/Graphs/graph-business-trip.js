const Vertex = require("./Vertex");
const Graph = require("./Graphs");

function businessTrip(graph, cityNames) {
  if (!graph || !cityNames || cityNames.length < 2) {
    return null;
  }

  let totalCost = 0;

  for (let i = 0; i < cityNames.length - 1; i++) {
    const firstCity = cityNames[i];
    const secondCity = cityNames[i + 1];

    //   console.log(firstCity, "firstCity");
    //   console.log(secondCity, "secondCity");

    const foundedEdge = graph.edges.find((edge) => {
      // graph.edges it is an array inside the graph constructor each time we add an edge to the graph we push this edge to the array
      return (
        (edge.start.value === firstCity && edge.end.value === secondCity) ||
        (edge.start.value === secondCity && edge.end.value === firstCity)
      );
    });

    if (foundedEdge) {
      // The edge was found
      console.log("Edge  found", foundedEdge);
      totalCost += foundedEdge.weight;
    } else {
      console.log("Edge not found");
    }
  }

  return totalCost;
}

const Pandora = new Vertex("Pandora");
const Arendelle = new Vertex("Arendelle");
const Monstropolis = new Vertex("Monstropolis");
const Naboo = new Vertex("Naboo");
const Narnia = new Vertex("Narnia");
const Metroville = new Vertex("Metroville");

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

console.log(businessGraph.getVertices());

console.log(businessGraph.breadthFirst(Pandora));

console.log(businessTrip(businessGraph, ["Metroville", "Pandora"]));
console.log(
  businessTrip(businessGraph, ["Arendelle", "Monstropolis", "Naboo"])
);
