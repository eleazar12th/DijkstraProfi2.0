import { Link } from "react-router-dom";

export default function CreatingGraphForm() {
    return (<div>
        <h1>Dijkstra visualisation | Create your graph</h1>
        <Link to={"/"}>
            <button type="button">Start visualization</button>
        </Link>
    </div>);
}