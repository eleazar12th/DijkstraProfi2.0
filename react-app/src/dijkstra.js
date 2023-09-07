import { Heap } from "heap-js";
import State from "./structures/state";
import * as colors from "./constants/colors";
import { INF } from "./constants/numbers";

function findEdgesAmount(n, edges) {
    let edgesCount = 0;
    for (let v = 1; v <= n; ++v) {
        edgesCount += edges[v].length;
    }
    return edgesCount;
}

export default function Dijkstra(graphData, start) {
    const n = graphData.nodesAmount;
    const edges = graphData.edges;

    let states = [];
    let dist = Array(n + 1).fill(INF);
    let nodeColors = Array(n + 1).fill(colors.GRAY);
    const edgesAmount = findEdgesAmount(n, edges);
    let edgeColors = Array(edgesAmount).fill(colors.BLACK);

    let redFlag = false;

    function pushState(description) {
        let newState = new State(
            [...dist], [...nodeColors], [...edgeColors], description
        );
        states.push(newState);
    }

    function turnEdgesRed(v) {
        for (let e of edges[v]) {
            if (e.to !== v && nodeColors[e.to] !== colors.GREEN) {
                redFlag = true;
                edgeColors[e.id] = colors.RED;
            }
        }
    }

    function turnEdgesBlack(v) {
        redFlag = false;
        for (let e of edges[v]) {
            edgeColors[e.id] = colors.BLACK;
        }
    }

    const customComparator = (el1, el2) => el1[0] - el2[0];
    let heap = new Heap(customComparator);

    dist[start] = 0;
    heap.push([dist[start], start]);
    nodeColors[start] = colors.BLUE;

    pushState("FIRST_STEP");

    while (!heap.isEmpty()) {
        let v = heap.pop()[1];
        if (nodeColors[v] === colors.GREEN) {
            continue;
        }

        nodeColors[v] = colors.GREEN;
        pushState("SELECT_GREEN_NODE");

        turnEdgesRed(v);
        if (redFlag)
            pushState("TURN_EDGES_RED");

        for (let e of edges[v]) {
            if (e.to !== v && nodeColors[e.to] !== colors.GREEN) {
                nodeColors[e.to] = colors.BLUE;

                if (dist[v] + e.length < dist[e.to]) {
                    dist[e.to] = dist[v] + e.length;
                    heap.push([dist[e.to], e.to]);
                }
            }
        }

        if (redFlag) {
            pushState("UPDATE_DISTANCE");
            turnEdgesBlack(v);
            pushState("TURN_EDGES_BLACK");
        }
    }

    pushState("LAST_STEP");
    return states;
}