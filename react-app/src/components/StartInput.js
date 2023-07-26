export default function StartInput(props) {
    return (<div>
        <label htmlFor="start-input">Start node: </label>
        <input type="number" defaultValue="1" id="start-input"
               min="1" onBlur={props.handleOnBlur}></input>
        <br />
    </div>);
}