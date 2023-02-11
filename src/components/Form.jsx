import React, { useState } from "react";
import MarkdownEditor from "./MarkdownEditor";

import "./Form.css";

function Form() {
    const [value, setValue] = useState();
    const handleSubmit = () => {};

    return (
        <div>
            <h1>등록</h1>
            <form onSubmit={handleSubmit}>
                <div className="box">
                    <span>Key</span>
                    <input type="text" />
                </div>

                <div className="box">
                    <span>Content</span>
                    <div className="editor-wrap">
                        <MarkdownEditor value={value} setValue={setValue} />
                    </div>
                </div>
                <button type="submit" className="btn">
                    등록
                </button>
            </form>
        </div>
    );
}

export default Form;
