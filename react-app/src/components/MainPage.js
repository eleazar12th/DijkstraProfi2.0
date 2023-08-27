import {useEffect, useState, useMemo} from "react";
import {useLocation} from "react-router-dom";
import ControlButton from "./ControlButton";
import StartInput from "./StartInput";
import GraphConstructor from "./GraphConstructor";
import Dijkstra from "../dijkstra";
import SpeedRange from "./SpeedRange";
import Menu from "./Menu";
import * as defaultVal from "../values/default-values";

export default function MainPage() {
    const [start, setStart] = useState(1);
    const [speed, setSpeed] = useState(1);
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    const locationState = useLocation().state;
    const graphData = useMemo(
        () => {
            if (locationState) {
                return locationState.graphData;
            }

            return defaultVal.UNDIRECTED_GRAPH_DATA;
        },
        [locationState]
    )

    const graphStates = useMemo(
        () => Dijkstra(graphData, start),
        [graphData, start]
    );
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
    }, [paused, index, maxIndex, speed]);

    function onPause() {
        setPaused(true);
    }

    function onPlay() {
        if (index === maxIndex) {
            setIndex(0);
        }

        setPaused(false);
    }

    function onStepBack() {
        if (paused) {
            setIndex(Math.max(0, index - 1));
        }
    }

    function onStepForward() {
        if (paused) {
            setIndex(Math.min(maxIndex, index + 1));
        }
    }

    function onSkipBack() {
        if (paused) {
            setIndex(0);
        }
    }

    function onSkipForward() {
        if (paused) {
            setIndex(maxIndex);
        }
    }

    function handleStartChange(evt) {
        setPaused(true);

        let val = evt.target.value;
        if (!val.trim().length || !Number.isInteger(+val)) {
            setErrorMessage("Ошибка: номер вершины может быть только целым числом");
            return;
        } else if (val < 1 || val > graphData.nodesAmount) {
            setErrorMessage("Ошибка: вершина с таким номером не найдена");
            return;
        }

        setErrorMessage("");
        setStart(+val);
        setIndex(0);
    }

    return (<div>
        <Menu activeLinkName="visualize" graphType={graphData.graphType} />

        <div className="page-content">

            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <ControlButton onClick={onSkipBack} text={"Skip back"} />
                        <ControlButton onClick={onStepBack} text={"Step back"} />
                        {paused && <ControlButton onClick={onPlay} text={"Play"} />}
                        {!paused && <ControlButton onClick={onPause} text={"Pause"} />}
                        <ControlButton onClick={onStepForward} text={"Step forward"} />
                        <ControlButton onClick={onSkipForward} text={"Skip forward"} />
                    </div>

                    <div className="col-4">
                        <StartInput handleStartChange={handleStartChange}/>
                        <br />
                    </div>
                </div>

                <div className="row">
                    <div className="col-8">
                        <SpeedRange speed={speed} setSpeed={setSpeed} />
                    </div>

                    <div className="col-4">
                        {errorMessage && <div className="alert alert-danger alert-sm" role="alert">
                            {errorMessage}
                        </div>}
                    </div>
                </div>
            </div>

            <GraphConstructor graphData={graphData} graphState={graphStates[index]}/>
        </div>
    </div>);
}