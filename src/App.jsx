import React from "react";
import { Route, Routes } from "react-router-dom";
import Toolbar from "./components/Toolbar";
import Main from "./components/Main";

import "./App.css";
import List from "./components/List";
import ListContent from "./components/ListContent";
import DetailContent from "./components/DetailContent";

function App() {
    return (
        <div className="wrap">
            <Toolbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/list" element={<List />}>
                        <Route index element={<ListContent />} />
                        <Route path="detail" element={<DetailContent />} />
                    </Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
