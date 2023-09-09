import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import AnotherGraphPage from "./components/AnotherGraphPage";
import "./css/main.css";
import FeelAlgorithmPage from "./components/FeelAlgorithmPage";
import HelpPage from "./components/HelpPage";

export default function App() {
    return (<div>
        <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/create_graph" element={<AnotherGraphPage/>} />
            <Route path="/feel_algorithm" element={<FeelAlgorithmPage/>} />
            <Route path="/help" element={<HelpPage/>} />
        </Routes>
    </div>);
}