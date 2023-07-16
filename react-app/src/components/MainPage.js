import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import GraphConstructor from "./GraphConstructor";
import Dijkstra from "../dijkstra";
import * as defaultVal from "../values/default-values";

export default function MainPage(props) {
    const [start, setStart] = useState(1);
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    const graphStates = useMemo(
        () => Dijkstra(defaultVal.N, defaultVal.EDGES, start),
        [start]
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
        }, props.time * 1000);
        return () => clearInterval(interval);
    }, [paused, index, maxIndex, props.time]);

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
        } else if (val < 1 || val > defaultVal.N) {
            setErrorMessage("Ошибка: вершина с таким номером не найдена");
            return;
        }

        setErrorMessage("");
        setStart(+val);
        setIndex(0);
    }

    return (<div>
        <h1>Dijkstra visualisation</h1>

        <label htmlFor="start-input">Start node: </label>
        <input type="text" defaultValue="1" id="start-input"
               onBlur={handleStartChange}></input>
        <br />

        {errorMessage ? <h4 style={{color: "red"}}>{errorMessage}</h4> : <br/>}

        <button type="button" onClick={onSkipBack}>Skip back</button>
        <button type="button" onClick={onStepBack}>Step back</button>
        {paused && <button type="button" onClick={onPlay}>Play</button>}
        {!paused && <button type="button" onClick={onPause}>Pause</button>}
        <button type="button" onClick={onStepForward}>Step forward</button>
        <button type="button" onClick={onSkipForward}>Skip forward</button>

        <Link to={"/create_graph"}>
            <button type="button" style={{marginLeft: "80px"}}>Another graph</button>
        </Link>

        <GraphConstructor edgesMap={defaultVal.EDGES} graphState={graphStates[index]}/>
    </div>);
}