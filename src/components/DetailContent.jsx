import React from "react";

function DetailContent() {
    return (
        <div>
            <h1>상세보기</h1>
            <div>
                <div>Key</div>
                <div>
                    <input type="text" readOnly />
                </div>
            </div>
            <div>
                <div>Contents</div>
                <div>
                    <textarea readOnly></textarea>
                </div>
            </div>
        </div>
    );
}

export default DetailContent;
