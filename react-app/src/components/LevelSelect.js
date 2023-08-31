export default function LevelSelect(props) {
    return (<div className="input-group input-group-sm mb-3 width-320">
        <span className="input-group-text" id="level-label">Level</span>
        <select name="level-select" id="level-select"
                className="form-select form-select-sm"
                onChange={props.handleLevelChange}>

            <option value={"easy"}>Easy</option>
            <option value={"hard"}>Hard</option>

        </select>
    </div>);
}