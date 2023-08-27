export default function ModeSelect(props) {
    return (<div className="input-group input-group-sm mb-3 width-310">
        <select className="form-select form-select-sm"
                name="graph-type-select" id="graph-type-select"
                onChange={props.handleOnChange}>

            <option value="new-graph">Custom new graph</option>
            <option value="use-undirected">Use a ready-made undirected graph</option>
            <option value="use-directed">Use a ready-made directed graph</option>

        </select>
        <br />
    </div>);
}