import React from "react";
import ListItem from "./ListItem";

function ListContent() {
    return (
        <div>
            <h1>조회</h1>
            <ListItem keyValue="privacy" />
            <ListItem keyValue="privacy2" />
            <ListItem keyValue="privacy3" />
        </div>
    );
}

export default ListContent;
