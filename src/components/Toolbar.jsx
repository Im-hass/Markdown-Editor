import React from "react";
import { Link } from "react-router-dom";

import "./Toolbar.css";

function Toolbar() {
    return (
        <div className="toolbar-wrap">
            <Link to="/list">조회</Link>
            <Link to="/regi">등록</Link>
        </div>
    );
}

export default Toolbar;
