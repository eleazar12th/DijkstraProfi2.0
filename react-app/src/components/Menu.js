export default function Menu() {
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
                            <a className="nav-link active" aria-current="page" href="#">Visualisation</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Another graph</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Feel algorithm</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Help</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>);
}