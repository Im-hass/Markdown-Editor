import React from "react";

import "./ListItem.css";
import { Link } from "react-router-dom";

function ListItem({ keyValue }) {
    return (
        <Link to={`/detail/${keyValue}`} className="listItem-wrap">
            <div className="title">Key</div>
            <div className="value">{keyValue}</div>
        </Link>
    );
}

export default ListItem;
