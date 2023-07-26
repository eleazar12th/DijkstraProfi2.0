export default function ModeSelect(props) {
    return (<div>
        <select name="graph-type-select" id="graph-type-select"
                onChange={props.handleOnChange}>

            <option value="new-graph">Custom new graph</option>
            <option value="use-undirected">Use a ready-made undirected graph</option>
            <option value="use-directed">Use a ready-made directed graph</option>

        </select>
        <br />
        <br />
    </div>);
}