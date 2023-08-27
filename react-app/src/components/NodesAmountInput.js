export default function NodesAmountInput(props) {
    return (<div className="input-group input-group-sm mb-3 width-310">
        <span className="input-group-text" id="nodes-amount-label">Number of nodes</span>
        <input type="number" className="form-control"
               aria-describedby="nodes-amount-input" min="1" onChange={props.handleOnChange} />
    </div>);
}