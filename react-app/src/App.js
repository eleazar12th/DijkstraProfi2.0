import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import CreateGraphForm from "./components/CreateGraphForm";

export default function App() {
    return (<div>
        <Routes>
            <Route path="/" element={<MainPage time={1} />} />
            <Route path="/create_graph" element={<CreateGraphForm/>} />
        </Routes>
    </div>);
}