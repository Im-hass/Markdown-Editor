import React from "react";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";

function MarkdownEditor() {
    return (
        <Editor
            previewStyle="vertical"
            height="400px"
            initialEditType="markdown"
            initialValue="hello"
            toolbarItems={[
                ["heading", "bold", "italic", "strike"],
                ["hr", "quote"],
                ["ul", "ol", "task", "indent", "outdent"],
                ["table", "image", "link"],
                ["code", "codeblock"],
            ]}
        />
    );
}

export default MarkdownEditor;
