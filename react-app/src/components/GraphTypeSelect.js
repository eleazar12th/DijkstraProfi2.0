export default function GraphTypeSelect(props) {
    return (<div className="input-group input-group-sm mb-3 width-300">
        <span className="input-group-text" id="graph-type-label">Graph type</span>
        <select name="graph-type-select" id="graph-type-select"
                className="form-select form-select-sm"
                onChange={props.handleOnChange} defaultValue={props.defaultType}>

            <option value="undirected">Undirected</option>
            <option value="directed">Directed</option>

        </select>
    </div>);
}