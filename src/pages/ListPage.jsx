import React from "react";
import { Outlet } from "react-router-dom";

function ListPage() {
    return (
        <div>
            <Outlet />
        </div>
    );
}

export default ListPage;
