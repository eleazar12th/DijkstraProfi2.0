export default function LevelSelect(props) {
    return (<div>
        <label htmlFor={"level-select"}>Level: </label>
        <select id={"level-select"} name={"level-select"} onChange={props.handleLevelChange}>
            <option value={"easy"}>Easy</option>
            <option value={"hard"}>Hard</option>
        </select>
        <br />
        <br />
    </div>);
}