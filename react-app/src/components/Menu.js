import { Link } from "react-router-dom";

export default function Menu(props) {
    function navLinkClassName(linkName) {
        if (linkName === props.activeLinkName) {
            return "nav-link active";
        }

        return "nav-link";
    }

    return (<div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">DijkstraProfi</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={navLinkClassName("visualize")} to="/">
                                Visualization
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className={navLinkClassName("another")} to="/create_graph">
                                Another graph
                            </Link>
                        </li>

                        <li className="nav-item">
                            <a className={navLinkClassName("feel")} href="#">
                                Feel algorithm
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className={navLinkClassName("help")} href="#">
                                Help
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>);
}