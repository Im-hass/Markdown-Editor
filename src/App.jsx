import React from "react";
import "./main.css";
import MarkdownEditor from "./components/MarkdownEditor";

function App() {
    const handleSubmit = () => {};

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="box">
                    <span>Key</span>
                    <input type="text" />
                </div>

                <div className="box">
                    <span>Content</span>
                    <div className="editor-wrap">
                        <MarkdownEditor />
                    </div>
                </div>
                <button type="submit" className="btn-save">
                    Save
                </button>
            </form>
        </div>
    );
}

export default App;
