export default function ControlButton(props) {
    return (
        <button type="button" className="control-btn btn btn-secondary btn-sm" onClick={props.onClick}>
            {props.text}
        </button>
    );
}