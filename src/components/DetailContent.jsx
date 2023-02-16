import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./DetailContent.css";

import { getDetailPolicy } from "../store/api/policy";
import MarkdownEditor from "./MarkdownEditor";

function DetailContent() {
    const { keyValue } = useParams();
    const [data, setData] = useState({
        key: "",
        contents: "",
    });

    useEffect(() => {
        if (keyValue !== undefined) {
            getDetailPolicy(keyValue).then((res) => {
                setData({
                    key: keyValue,
                    contents: res.data.data.contents,
                });
            });
        }
    }, [keyValue]);

    return (
        <div>
            <h1>상세보기</h1>
            {data && (
                <div className="detailContent-wrap">
                    <div className="box">
                        <span>Key</span>
                        <input type="text" value={keyValue} readOnly />
                    </div>
                    <div className="box">
                        <span>Contents</span>
                        <div className="contents-wrap">
                            <MarkdownEditor
                                isReadOnly={true}
                                value={data.contents}
                            />
                        </div>
                    </div>
                    <div className="box btn-wrap">
                        <Link
                            to="/modification"
                            state={{
                                key: { keyValue },
                            }}
                            className="btn"
                        >
                            수정
                        </Link>
                        <button className="btn">삭제</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DetailContent;
