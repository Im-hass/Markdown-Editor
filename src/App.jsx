import React from "react";
import { Route, Routes } from "react-router-dom";
import Toolbar from "./components/Toolbar";

import ListPage from "./pages/ListPage";
import ListContent from "./components/ListContent";
import DetailContent from "./components/DetailContent";

import "./App.css";
import Form from "./components/Form";

function App() {
    return (
        <div className="wrap">
            <Toolbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<ListPage />}>
                        <Route index element={<ListContent />} />
                        <Route path="detail/:keyValue" element={<DetailContent />} />
                    </Route>
                    <Route path="regi" element={<Form />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
