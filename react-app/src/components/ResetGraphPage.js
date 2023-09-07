import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import ModeSelect from "./ModeSelect";
import GraphTypeSelect from "./GraphTypeSelect";
import NodesAmountInput from "./NodesAmountInput";
import Table from "./Table";
import LevelSelect from "./LevelSelect";
import Menu from "./Menu";
import GraphData from "../structures/graph-data";
import * as defaultVal from "../constants/default-graphs";

export default function ResetGraphPage() {
    const locationState = useLocation().state;
    const [graphTypeInitValue, setGraphTypeInitValue] = useState(
        locationState && locationState.graphType ? locationState.graphType : "undirected"
    );

    const [matrix, setMatrix] = useState([]);
    const [errorMatrix, setErrorMatrix] = useState([]);
    const [graphType, setGraphType] = useState(graphTypeInitValue);

    const [mode, setMode] = useState("new-graph");
    const [nodesAmount, setNodesAmount] = useState(null);

    const [directedLevel, setDirectedLevel] = useState("easy");

    const [errorMessageTop, setErrorMessageTop] = useState("");
    const [errorMessageBottom, setErrorMessageBottom] = useState("");

    const [graphData, setGraphData] = useState(null);
    const [readyToVisualize, setReadyToVisualize] = useState(false);

    function handleModeChange(evt) {
        setMode(evt.target.value);

        setGraphTypeInitValue(graphType);
        setNodesAmount(null);
        setMatrix([]);
        setErrorMessageTop("");
        setErrorMessageBottom("");

        setDirectedLevel("easy");
    }

    function handleGraphTypeChange(evt) {
        setGraphType(evt.target.value);
    }

    function handleLevelChange(evt) {
        setDirectedLevel(evt.target.value);
    }

    function changeMatrixSize(newSize) {
        setMatrix((oldMatrix) => {
            let newMatrix = [];
            for (let i = 0; i < newSize; ++i) {
                newMatrix.push(Array(newSize).fill("-"))
            }

            const n = Math.min(newSize, oldMatrix.length);
            for (let i = 0; i < n; ++i) {
                for (let j = 0; j < n; ++j) {
                    if (oldMatrix[i][j] !== "-") {
                        newMatrix[i][j] = oldMatrix[i][j];
                    }
                }
            }
            return newMatrix;
        });
    }

    function checkErrorMatrix(arr) {
        for (let i = 0; i < arr.length; ++i) {
            for (let j = 0; j < arr.length; ++j) {
                if (arr[i][j] !== "") {
                    setErrorMessageBottom(arr[i][j]);
                    return;
                }
            }
        }

        setErrorMessageBottom("");
    }

    function setCheckErrorMatrix(newErrorMatrix) {
        setErrorMatrix(newErrorMatrix);
        checkErrorMatrix(newErrorMatrix);
    }

    function changeErrorMatrixSize(newSize) {
        let newErrorMatrix = [];
        for (let i = 0; i < newSize; ++i) {
            newErrorMatrix.push(Array(newSize).fill(""))
        }

        const n = Math.min(newSize, errorMatrix.length);
        for (let i = 0; i < n; ++i) {
            for (let j = 0; j < n; ++j) {
                if (errorMatrix[i][j] !== "") {
                    newErrorMatrix[i][j] = errorMatrix[i][j];
                }
            }
        }

        setCheckErrorMatrix(newErrorMatrix);
    }

    function handleNodesAmountChange(evt) {
        let val = +evt.target.value;
        if (!Number.isInteger(val) || val < 1) {
            setErrorMessageTop("Error: enter a natural number");
            return;
        } else if (val > 16) {
            setErrorMessageTop("Error: the number of nodes should not be greater than 16");
            return;
        }

        setNodesAmount(val);
        changeMatrixSize(val);
        changeErrorMatrixSize(val);
        setErrorMessageTop("");
    }

    function getGraphData() {
        if (mode === "use-undirected") {
            return defaultVal.UNDIRECTED_GRAPH_DATA;
        } else if (mode === "use-directed" && directedLevel === "easy") {
            return defaultVal.DIRECTED_GRAPH_DATA_1;
        } else if (mode === "use-directed" && directedLevel === "hard") {
            return defaultVal.DIRECTED_GRAPH_DATA_2;
        }

        return new GraphData(matrix, graphType);
    }

    function startVisualization() {
        setReadyToVisualize(true);
        setGraphData(getGraphData());
    }

    if (readyToVisualize) {
        return (
            <Navigate to="/" state={{graphData: graphData}}/>
        );
    }

    const disableVisualization = (mode === "new-graph") && (
        (nodesAmount === null)
        || (errorMessageTop !== "")
        || (errorMessageBottom !== "")
    );

    return (<div>
        <Menu activeLinkName="another" />

        <div className="container page-content">
            <div className="row justify-content-md-center">
                <ModeSelect handleOnChange={handleModeChange}/>
            </div>

            {mode === "new-graph" &&
                <div>
                    <div className="row justify-content-md-center">
                        <GraphTypeSelect handleOnChange={handleGraphTypeChange}
                                         defaultType={graphTypeInitValue}/>
                    </div>

                    <div className="row justify-content-md-center">
                        <NodesAmountInput handleOnChange={handleNodesAmountChange}/>
                    </div>

                    {nodesAmount && !errorMessageTop &&
                        <div className="row justify-content-md-center">
                            <div className="alert alert-light alert-sm text-center w-50" role="alert">
                                Fill in the adjacency matrix
                            </div>
                        </div>
                    }

                    {errorMessageTop &&
                        <div className="row justify-content-md-center">
                            <div className="alert alert-danger alert-sm text-center w-50" role="alert">
                                {errorMessageTop}
                            </div>
                        </div>
                    }

                    {nodesAmount &&
                        <Table
                            nodesAmount={nodesAmount}
                            graphType={graphType}
                            matrix={matrix}
                            setMatrix={setMatrix}
                            errorMatrix={errorMatrix}
                            setCheckErrorMatrix={setCheckErrorMatrix}
                        />
                    }

                    {errorMessageBottom && <div className="row justify-content-md-center">
                        <div className="alert alert-danger alert-sm text-center w-50" role="alert">
                            {errorMessageBottom}
                        </div>
                    </div>}
                </div>
            }

            {mode === "use-directed" && <div className="row justify-content-md-center">
                <LevelSelect handleLevelChange={handleLevelChange} />
            </div>}

            <div className="text-center">
                <button type="button" className="btn btn-primary"
                        disabled={disableVisualization}
                        onClick={startVisualization}
                >Start visualization</button>
            </div>
        </div>
    </div>)
}