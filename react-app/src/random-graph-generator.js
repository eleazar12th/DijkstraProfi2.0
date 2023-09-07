import GraphData from "./structures/graph-data";
import Dijkstra from "./dijkstra";

function randomEdge() {
   return Math.floor(Math.random() * 200);
}

function randomMatrixGenerator(nodesAmount) {
    let matrix = []
    for (let i = 0; i < nodesAmount; ++i) {
        matrix.push(Array(nodesAmount).fill("-"));
    }

    for (let v = 0; v < nodesAmount; ++v) {
        for (let u = v; u < nodesAmount; ++u) {
            let p = Math.random();
            if (p > 0.8) {
                let e = randomEdge();
                matrix[v][u] = e;
                matrix[u][v] = e;
            }
        }
    }
    return matrix;
}

function randomStart(nodesAmount) {
    return Math.ceil(Math.random() * nodesAmount);
}

export default function randomGraphDataStates() {
    let nodesAmount = 15;
    let matrix = randomMatrixGenerator(nodesAmount);
    let graphData = new GraphData(matrix, "undirected");

    let start = randomStart(nodesAmount);
    let graphStates = Dijkstra(graphData, start);
    return [nodesAmount, graphData, graphStates];
}
