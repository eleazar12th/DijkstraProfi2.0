export default function SpeedRange(props) {
    function handleOnChange(evt) {
        props.setSpeed(+evt.target.value);
    }

    return (<div>
        <br />
        <label htmlFor={"speed-range"}>Speed </label>
        <input type="range" id={"speed-range"} name={"speed-range"}
               min={"0.25"} max={"3"} step={"0.25"} defaultValue={"1"}
               onChange={handleOnChange} />
        <span id={"speed-range-value"}> {props.speed}</span>
    </div>);
}