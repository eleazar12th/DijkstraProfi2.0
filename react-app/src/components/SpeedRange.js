export default function SpeedRange(props) {
    function handleOnChange(evt) {
        props.setSpeed(+evt.target.value);
    }

    return (<div className="speed-range">
        <label htmlFor={"speed-range-input"} className="form-label">Speed </label>
        <input type="range" id={"speed-range-input"} name={"speed-range-input"}
               min={"0.25"} max={"3"} step={"0.25"} defaultValue={"1"}
               onChange={handleOnChange} />
        <span id={"speed-range-value"} className="form-label"> {props.speed}</span>
    </div>);
}