// import "@toast-ui/editor/dist/toastui-editor.css";

// import { Editor } from "@toast-ui/react-editor";

// const MyComponent = () => (
//     <Editor
//         initialValue="hello react editor world!"
//         previewStyle="vertical"
//         height="600px"
//         initialEditType="markdown"
//         useCommandShortcut={true}
//     />
// );

// export default MyComponent;

import React from "react";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";

class MyComponent extends React.Component {
    editorRef = React.createRef();

    handleClick = () => {
        this.editorRef.current.getInstance().exec("bold");
    };

    render() {
        return (
            <>
                <Editor
                    previewStyle="vertical"
                    height="400px"
                    initialEditType="markdown"
                    initialValue="hello"
                    ref={this.editorRef}
                    toolbarItems={[
                        ["heading", "bold", "italic", "strike"],
                        ["hr", "quote"],
                        ["ul", "ol", "task", "indent", "outdent"],
                        ["table", "image", "link"],
                        ["code", "codeblock"],
                    ]}
                />
                <button onClick={this.handleClick}>make bold</button>
            </>
        );
    }
}

export default MyComponent;
