import * as ReactDOMClient from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";


const app = ReactDOMClient.createRoot(document.getElementById("app"));
app.render(
    <HashRouter>
        <App />
    </HashRouter>
);
