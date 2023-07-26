import { useState } from "react";
import { Navigate } from "react-router-dom";
import ModeSelect from "./ModeSelect";
import GraphTypeSelect from "./GraphTypeSelect";
import NodesAmountInput from "./NodesAmountInput";
import Table from "./Table";
import GraphData from "../structures/graph-data";
import * as defaultVal from "../values/default-values";

export default function ResetGraphPage() {
    const [matrix, setMatrix] = useState([]);
    const [graphType, setGraphType] = useState("undirected");

    const [mode, setMode] = useState("new-graph");
    const [nodesAmount, setNodesAmount] = useState(null);

    const [errorMessageTop, setErrorMessageTop] = useState("");
    const [errorMessageBottom, setErrorMessageBottom] = useState("");
    const [matrixErrorCount, setMatrixErrorCount] = useState(0);

    const [graphData, setGraphData] = useState(null);
    const [readyToVisualize, setReadyToVisualize] = useState(false);

    function handleModeChange(evt) {
        setMode(evt.target.value);
    }

    function handleGraphTypeChange(evt) {
        setGraphType(evt.target.value);
    }

    function handleNodesAmountChange(evt) {
        let val = +evt.target.value;
        if (!Number.isInteger(val) || val < 1) {
            setErrorMessageTop("Ошибка: введите натуральное число");
            return;
        } else if (val > 16) {
            setErrorMessageTop("Ошибка: количество вершин не должно превышать 16");
            return;
        }

        setNodesAmount(val);
        setErrorMessageTop("");

        setMatrix(
            Array(val).fill(
                Array(val).fill("-")
            )
        );
    }

    function getGraphData() {
        if (mode === "use-undirected") {
            return defaultVal.UNDIRECTED_GRAPH_DATA;
        } else if (mode === "use-directed") {
            return defaultVal.DIRECTED_GRAPH_DATA;
        }

        return new GraphData(matrix, graphType);
    }

    function startVisualization() {
        setReadyToVisualize(true);
        setGraphData(getGraphData());
    }

    if (readyToVisualize) {
        return (
            <Navigate to="/" state={{graphData: graphData}} />
        );
    }

    return (<div>
        <h1>Dijkstra visualisation | Create your graph</h1>
        <ModeSelect handleOnChange={handleModeChange}/>

        {mode === "new-graph" &&
            <div>
                <GraphTypeSelect handleOnChange={handleGraphTypeChange} />
                <NodesAmountInput handleOnChange={handleNodesAmountChange} />

                {errorMessageTop ? <h4 style={{color: "red"}}>{errorMessageTop}</h4> : <br/>}

                {nodesAmount &&
                    <Table
                        nodesAmount={nodesAmount}
                        graphType={graphType}
                        matrix={matrix}
                        setMatrix={setMatrix}
                        setMatrixErrorCount={setMatrixErrorCount}
                    />
                }

                {errorMessageBottom && <h4 style={{color: "red"}}>{errorMessageBottom}</h4>}
            </div>
        }

        <button type="button" onClick={startVisualization}>Start visualization</button>
    </div>)
}