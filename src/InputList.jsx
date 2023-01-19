import React from "react";

import MarkdownEditor from "./MarkdownEditor";

function InputList() {
    return (
        <div>
            <form>
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
            </form>
        </div>
    );
}

export default InputList;
