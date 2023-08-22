export default function ControlButton(props) {
    return (
        <button type="button" className="btn btn-secondary btn-sm" onClick={props.onClick}>
            {props.text}
        </button>
    );
}