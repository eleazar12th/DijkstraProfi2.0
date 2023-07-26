export default function NodesAmountInput(props) {
    return (<div>
        <label htmlFor="nodes-amount-input">Number of nodes: </label>
        <input type="number" id="nodes-amount-input"
               min="1" onChange={props.handleOnChange}></input>
        <br />
    </div>);
}