import React from "react";

import "./ListItem.css";

function ListItem({ keyValue, handleDetail }) {
    return (
        <button
            onClick={() => {
                handleDetail(keyValue);
            }}
            className="listItem-wrap"
        >
            <div className="title">Key</div>
            <div className="value">{keyValue}</div>
        </button>
    );
}

export default ListItem;
