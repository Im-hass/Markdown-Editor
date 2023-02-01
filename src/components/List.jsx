import React from "react";
import { Outlet } from "react-router-dom";

function List() {
    return (
        <div>
            <div>정책 목록</div>
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default List;
