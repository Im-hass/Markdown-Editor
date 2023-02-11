import React from "react";

import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";

function MarkdownEditor({ isReadOnly, value, setValue }) {
    if (isReadOnly) {
        return (
            <>
                <MDEditor
                    height={400}
                    value={value}
                    preview={"preview"}
                    hideToolbar={true}
                    previewOptions={{
                        rehypePlugins: [[rehypeSanitize]],
                    }}
                />
            </>
        );
    }

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
