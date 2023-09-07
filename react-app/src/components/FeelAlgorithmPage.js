import Menu from "./Menu";
import randomGraphDataStates from "../random-graph-generator";
import {Navigate, useLocation} from "react-router-dom";
import {useEffect, useMemo, useState} from "react";
import ControlButton from "./ControlButton";
import GraphConstructor from "./GraphConstructor";
import "../css/feel-algorithm.css";

export default function FeelAlgorithmPage() {
    const [index, setIndex] = useState(0);

    const [paused, setPaused] = useState(true);
    const [speed, setSpeed] = useState(1);

    const [graphData, setGraphData] = useState([]);
    const [graphStates, setGraphStates] = useState(null);
    const [maxIndex, setMaxIndex] = useState(0);

    function setRandomGraph() {
        let [newNodesAmount, newGraphData, newGraphStates] = randomGraphDataStates();
        setGraphData(newGraphData);
        setGraphStates(newGraphStates);
        setMaxIndex(newNodesAmount - 1);
    }

    useEffect(() => {
        setRandomGraph();
    }, [])

    useEffect(() => {
        if (paused) {
            return;
        }

        const maxIndex = graphStates.length - 1;

        const interval = setInterval(() => {
            setIndex(Math.min(index + 1, maxIndex));

            if (index === maxIndex) {
                setPaused(true);
            }
        }, 1000 / speed);
        return () => clearInterval(interval);
    }, [paused, graphStates, index, speed]);

    function onPause() {
        setPaused(true);
    }

    function onPlay() {
        if (index === maxIndex) {
            setIndex(0);
        }

        setPaused(false);
    }

    function onRestart() {
        setIndex(0);
        setPaused(true);
        setRandomGraph();
    }

    return (<div>
        <Menu activeLinkName="feel" graphType={graphData.graphType} />

        <div className="page-content container">
            <ControlButton onClick={onRestart} text={"Restart"} />
            {paused && <ControlButton onClick={onPlay} text={"Play"} />}
            {!paused && <ControlButton onClick={onPause} text={"Pause"} />}

            <GraphConstructor graphData={graphData} graphState={graphStates ? graphStates[index] : null}
                              bigGraph={true} />
        </div>
    </div>);
}