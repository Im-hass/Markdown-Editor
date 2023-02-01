import React from "react";
import "./Form.css";
import MarkdownEditor from "./MarkdownEditor";

function Form() {
    const handleSubmit = () => {};

    return (
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
                등록
            </button>
        </form>
    );
}

export default Form;