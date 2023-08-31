import { useMemo } from "react";
import Graph from "react-graph-vis";
import { INF } from "../values/constants";

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
    function createGraphNodesEdges(graphData, graphState) {
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
        () => createGraphNodesEdges(props.graphData, props.graphState),
        [props.graphData, props.graphState]
    );

    const options = {
        layout: {
            hierarchical: false
        },
        height: "100%",
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

    return (<div className="row">
        <div className="col-6 d-flex align-items-center">
            <Graph graph={graph} options={options} />
        </div>

        <div className="col-6 d-flex align-items-center">
            <div className="card w-100">
                <div className="card-header">
                    Current algorithm step
                </div>
                <div className="card-body">
                    {props.graphState.description}
                </div>
            </div>
        </div>
    </div>);
}