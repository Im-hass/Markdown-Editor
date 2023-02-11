import React from "react";
import { Route, Routes } from "react-router-dom";
import Toolbar from "./components/Toolbar";

import ListPage from "./pages/ListPage";
import DetailContent from "./components/DetailContent";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";

import "./App.css";

function App() {
    return (
        <div className="wrap">
            <Toolbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/list" element={<ListPage />} />
                    <Route
                        path="/detail/:keyValue"
                        element={<DetailContent />}
                    />
                    <Route
                        path="/registration"
                        element={<RegistrationPage />}
                    />
                    <Route path="*" element={<LoginPage />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
