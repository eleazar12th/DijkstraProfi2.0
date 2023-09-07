import GraphData from "../structures/graph-data";

const directedGraphMatrix1 = [
    ["-", 7, 9, "-", "-", 14],
    ["-", "-", 10, 15, "-", "-"],
    ["-", "-", "-", 11, "-", 2],
    ["-", "-", "-", "-", 6, "-"],
    ["-", "-", "-", "-", "-", 9],
    ["-", "-", "-", "-", "-", "-"]
];
export const DIRECTED_GRAPH_DATA_1 = new GraphData(directedGraphMatrix1, "directed");

const directedGraphMatrix2 = [
    ["-", 1, "-", 5, "-", 3, "-", "-", "-"],
    ["-", "-", 2, "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", 1, 3, "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", 4, "-", "-"],
    [3, "-", "-", "-", "-", "-", "-", 4, "-"],
    ["-", "-", "-", 3, "-", "-", 1, "-", "-"],
    ["-", "-", "-", "-", 2, "-", "-", "-", "-"],
    ["-", "-", 4, "-", "-", "-", "-", "-", 7],
    [6, "-", "-", "-", 2, "-", "-", "-", "-"]
];
export const DIRECTED_GRAPH_DATA_2 = new GraphData(directedGraphMatrix2, "directed");

const undirectedGraphMatrix = [
    ["-", 7, 9, "-", "-", 14],
    [7, "-", 10, 15, "-", "-"],
    [9, 10, "-", 11, "-", 2],
    ["-", 15, 11, "-", 6, "-"],
    ["-", "-", "-", 6, "-", 9],
    [14, "-", 2, "-", 9, "-"]
];
export const UNDIRECTED_GRAPH_DATA = new GraphData(undirectedGraphMatrix, "undirected");