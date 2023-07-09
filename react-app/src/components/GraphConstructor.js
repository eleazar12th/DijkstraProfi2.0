import { useMemo } from "react";
import Graph from "react-graph-vis";
import { INF } from "../values/constants";

export default function GraphConstructor(props) {
    function createGraphNodesEdges(graphState, edgesMap) {
        const nodesNumber = graphState.currDist.length - 1;
        let nodes = [];
        for (let v = 1; v <= nodesNumber; ++v) {
            let nodeDist = graphState.currDist[v];
            if (nodeDist === INF) {
                nodeDist = "inf";
            }

            let newNode = {
                id: v,
                label: v + ": " + nodeDist,
                title: "node " + v,
                color: graphState.nodeColors[v]
            };
            nodes.push(newNode);
        }

        let edges = [];
        for (let v = 1; v <= nodesNumber; ++v) {
            for (let edge of edgesMap[v]) {
                let newEdge = {
                    from: v,
                    to: edge.to,
                    label: edge.length.toString(),
                    color: graphState.edgeColors[edge.id]
                };
                edges.push(newEdge);
            }
        }

        return {
            nodes: nodes,
            edges: edges
        };
    }

    const graph = useMemo(
        () => createGraphNodesEdges(props.graphState, props.edgesMap),
        [props.graphState, props.edgesMap]
    );

    const options = {
        layout: {
            hierarchical: false
        },
        height: "500px",
        interaction: {
            dragNodes: false,
            dragView: false,
            selectable: true,
            selectConnectedEdges: true,
            hover: true,
            hoverConnectedEdges: true,
            zoomView: false,
        },
        physics: true
    };

    return (<div>
        <Graph graph={graph} options={options} />
        <p>{props.graphState.description}</p>
    </div>);
}