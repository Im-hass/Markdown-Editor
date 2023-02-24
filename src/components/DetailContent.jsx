import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import "./DetailContent.css";

import { deletePolicy, getDetailPolicy } from "../store/api/policy";
import MarkdownEditor from "./MarkdownEditor";

function DetailContent() {
    const navigate = useNavigate();
    const { keyValue } = useParams();
    const [data, setData] = useState({
        key: "",
        contents: "",
    });

    const handleDelete = () => {
        const token = localStorage.getItem("token");
        if (token !== undefined) {
            confirmAlert({
                title: `key : ${data.key}`,
                message: '삭제하시겠습니까?',
                buttons: [
                    {
                        label: '삭제',
                        onClick: () => {
                            deletePolicy(token, data.key).then(res => {
                                navigate('/list');
                            }).catch(e => {
                                console.log(e);
                            })
                        }
                    },
                    {
                        label: '취소',
                    }
                ]
            });
        }
    }

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
                        <button className="btn" onClick={handleDelete}>삭제</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DetailContent;
