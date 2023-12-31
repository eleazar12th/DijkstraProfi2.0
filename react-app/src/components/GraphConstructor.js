import { useMemo } from "react";
import Graph from "react-graph-vis";
import AlgorithmStep from "./AlgorithmStep";
import { INF } from "../constants/numbers";
import {BLACK} from "../constants/colors";

function hideArrow(edge) {
    edge.arrows = {
        to: {
            enabled: false
        }
    }
}

function enableSmooth(edge) {
    edge.smooth = {
        enabled: true,
        type: "curvedCCW",
        roundness: 0.5
    }
}

export default function GraphConstructor(props) {
    function createGraphNodesEdges(graphData, graphState, isBigGraph) {
        const graphType = graphData.graphType;
        const nodesNumber = graphData.nodesAmount;
        const edgesMap = graphData.edges;

        let nodes = [];
        for (let v = 1; v <= nodesNumber; ++v) {
            let nodeDist = graphState.currDist[v];
            if (nodeDist === INF) {
                nodeDist = "inf";
            }

            let newNode = {
                id: v,
                label: isBigGraph ? "  " + nodeDist + "  " : v + ": " + nodeDist,
                title: "node " + v,
                color: graphState.nodeColors[v]
            };
            nodes.push(newNode);
        }

        let edges = [];
        for (let v = 1; v <= nodesNumber; ++v) {
            for (let edge of edgesMap[v]) {
                let newEdgeColor = graphState.edgeColors[edge.id];
                let newEdge = {
                    from: v,
                    to: edge.to,
                    label: edge.length.toString(),
                    color: newEdgeColor,
                };

                if (newEdgeColor !== BLACK)
                    newEdge.width = 1;

                if (graphType === "undirected") {
                    if (newEdge.to < v)
                        continue;

                    hideArrow(newEdge);
                } else {
                    if (edge.curved)
                        enableSmooth(newEdge);
                }

                edges.push(newEdge);
            }
        }

        return {
            nodes: nodes,
            edges: edges
        };
    }

    const graph = useMemo(
        () => createGraphNodesEdges(props.graphData, props.graphState, props.bigGraph),
        [props.graphData, props.graphState, props.bigGraph]
    );

    const options = {
        layout: {
            hierarchical: false
        },
        height: "95%",
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

    if (props.bigGraph) {
        options.height = "100%";
        options.width = "100%";

        return (<div className="big-graph-window">
            <Graph graph={graph} options={options} />
        </div>);
    }

    return (<div className="row algorithm-row">
        <div className="col-6">
            <Graph graph={graph} options={options} />
        </div>

        <div className="col-6 d-flex flex-column justify-content-center">
            <AlgorithmStep hintKey={props.graphState.description} />
        </div>
    </div>);
}