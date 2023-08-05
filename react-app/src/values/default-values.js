import Edge from "../structures/edge";
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

export const EDGES = {
    1: [
        new Edge(0, 2, 7),
        new Edge(1, 3, 9),
        new Edge(2, 6, 14)
    ],
    2: [
        new Edge(3, 3, 10),
        new Edge(4, 4, 15)
    ],
    3: [
        new Edge(5, 4, 11),
        new Edge(6, 6, 2)
    ],
    4: [
        new Edge(7, 5, 6)
    ],
    5: [
        new Edge(8, 6, 9)
    ],
    6: []
}

export const N = 6;
export const START = 1;

export const GRAPH = {
    nodes: [
        { id: 1, label: "1: 0", title: "node 1" },
        { id: 2, label: "2: inf", title: "node 2" },
        { id: 3, label: "3: inf", title: "node 3" },
        { id: 4, label: "4: inf", title: "node 4" },
        { id: 5, label: "5: inf", title: "node 5" },
        { id: 6, label: "6: inf", title: "node 6" }
    ],
    edges: [
        { from: 1, to: 2, label: "7", color: "red", width: 2, length: 150 },
        { from: 1, to: 3, label: "9" },
        { from: 1, to: 6, label: "14" },
        { from: 2, to: 3, label: "10" },
        { from: 2, to: 4, label: "15" },
        { from: 3, to: 4, label: "11" },
        { from: 3, to: 6, label: "2" },
        { from: 4, to: 5, label: "6" },
        { from: 5, to: 6, label: "9" }
    ]
};