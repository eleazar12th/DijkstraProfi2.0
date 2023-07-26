export default function GraphTypeSelect(props) {
    return (<div>
        <label htmlFor="graph-type-select">Graph type: </label>
        <select name="graph-type-select" id="graph-type-select"
                onChange={props.handleOnChange}>

            <option value="undirected">Undirected</option>
            <option value="directed">Directed</option>

        </select>
        <br />
        <br />
    </div>);
}