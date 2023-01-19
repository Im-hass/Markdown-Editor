import React from "react";
import "./main.css";
import InputList from "./InputList";

function App() {
    const handleSave = () => {};

    return (
        <div className="container">
            <InputList />

            <button onClick={handleSave} className="btn-save">
                Save
            </button>
        </div>
    );
}

export default App;
