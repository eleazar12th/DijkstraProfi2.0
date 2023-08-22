export default function StartInput(props) {
    return (<div className="input-group input-group-sm mb-3 w-75">
        <span className="input-group-text" id="start-input">Start node</span>
        <input type="number" defaultValue="1" className="form-control"
               aria-describedby="start-input" min="1" onChange={props.handleStartChange} />
    </div>);
}