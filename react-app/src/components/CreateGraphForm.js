import { useState } from "react";
import { Link } from "react-router-dom";
import NodesAmountInput from "./NodesAmountInput";
import Table from "./Table";
import * as defaultVal from "../values/default-values";

export default function CreateGraphForm() {
    const [nodesAmount, setNodesAmount] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    function handleNodesAmountChange(evt) {
        let val = +evt.target.value;
        if (!Number.isInteger(val) || val < 1) {
            setErrorMessage("Ошибка: введите натуральное число");
            return;
        } else if (val > 16) {
            setErrorMessage("Ошибка: количество вершин не должно превышать 16");
            return;
        }

        setNodesAmount(val);
        setErrorMessage("");
    }

    return (<div>
        <h1>Dijkstra visualisation | Create your graph</h1>
        <NodesAmountInput handleOnChange={handleNodesAmountChange} />
        {errorMessage ? <h4 style={{color: "red"}}>{errorMessage}</h4> : <br/>}

        {nodesAmount && <Table nodesAmount={nodesAmount} mode="normal" />}
        <Link to={"/"}>
            <button type="button">Start visualization</button>
        </Link>
    </div>);
}