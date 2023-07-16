export default function NodesAmountInput(props) {
    return (<div>
        <label htmlFor="nodes-amount-input">Number of nodes: </label>
        <input type="text" id="nodes-amount-input"
               onChange={props.handleOnChange}></input>
        <br />
    </div>);
}