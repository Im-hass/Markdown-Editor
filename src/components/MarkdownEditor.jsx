import React from "react";

import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";

function MarkdownEditor({ value, setValue }) {
    return (
        <>
            <MDEditor
                height={400}
                value={value}
                onChange={setValue}
                previewOptions={{
                    rehypePlugins: [[rehypeSanitize]],
                }}
            />
        </>
    );
}

export default MarkdownEditor;
