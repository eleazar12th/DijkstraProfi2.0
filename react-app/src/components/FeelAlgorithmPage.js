import {useEffect, useMemo, useState} from "react";
import Menu from "./Menu";
import randomGraphDataStates from "../random-graph-generator";
import ControlButton from "./ControlButton";
import GraphConstructor from "./GraphConstructor";
import "../css/feel-algorithm.css";

export default function FeelAlgorithmPage() {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(true);

    const [graphData, graphStates] = useMemo(
        () => randomGraphDataStates(),
        []
    )

    const speed = 2;
    const maxIndex = graphStates.length - 1;

    useEffect(() => {
        if (paused) {
            return;
        }

        const interval = setInterval(() => {
            setIndex(Math.min(index + 1, maxIndex));

            if (index === maxIndex) {
                setPaused(true);
            }
        }, 1000 / speed);
        return () => clearInterval(interval);
    }, [paused, graphStates, index, maxIndex, speed]);

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
    }

    return (<div>
        <Menu activeLinkName="feel" graphType={graphData.graphType} />

        <div className="container feel-buttons">
            <ControlButton onClick={onRestart} text={"Restart"} />
            {paused && <ControlButton onClick={onPlay} text={"Play"} />}
            {!paused && <ControlButton onClick={onPause} text={"Pause"} />}
        </div>

        <GraphConstructor graphData={graphData} graphState={graphStates ? graphStates[index] : null}
                          bigGraph={true} />
    </div>);
}