import React, { useEffect, useState } from "react";
import MarkdownEditor from "./MarkdownEditor";

import "./Form.css";
import { useLocation, useNavigate } from "react-router-dom";
import { getDetailPolicy, modifyPolicy } from "../store/api/policy";
import { addNewPolicy } from "../store/api/policy";

function Form({ header }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [keyValue, setKeyValue] = useState();
    const [value, setValue] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (location.pathname === '/modification') {
            handleModify();
        } else {
            if (keyValue !== undefined &&
                keyValue.length !== 0 &&
                value !== undefined &&
                value.length !== 0) {
                    const token = localStorage.getItem('token');
                    addNewPolicy(token, {
                        key: keyValue,
                        contents: value,
                    }).then(res => {
                        if (res.status === 200) {
                            navigate(`/detail/${keyValue}`);
                        }
                    }).catch(e => {
                        console.log(e);
                    });
            }
        }
    };

    const handleModify = () => {
        if (value !== undefined && value.length !== 0) {
                const token = localStorage.getItem('token');
                modifyPolicy(token, {
                    key: keyValue,
                    contents: value,
                }).then(res => {
                    console.log(res);
                    if (res.status === 200) {
                        navigate(`/detail/${keyValue}`);
                    }
                }).catch(e => {
                    console.log(e);
                });
        }
    }

    const handleChangeKeyValue = (e) => {
        setKeyValue(e.target.value);
    };

    useEffect(() => {
        if (location.state !== null) {
            const key = location.state.key.keyValue;
            setKeyValue(key);
            getDetailPolicy(key).then((res) => {
                setValue(res.data.data.contents);
            });
        } else {
            setKeyValue();
            setValue();
        }
    }, [location]);

    return (
        <div>
            <h1>{header}</h1>
            <form onSubmit={handleSubmit}>
                <div className="box">
                    <span>Key</span>
                    <input
                        type="text"
                        value={keyValue || ""}
                        onChange={handleChangeKeyValue}
                        readOnly={location.pathname === "/modification" ? true : false}
                    />
                </div>

                <div className="box">
                    <span>Content</span>
                    <div className="editor-wrap">
                        <MarkdownEditor value={value} setValue={setValue} />
                    </div>
                </div>

                <div className="box-wrap">
                    <button type="submit" className="btn">
                        {header}
                    </button>
                    {location.pathname === "/modification" && (
                        <button
                            type="button"
                            className="btn btn-cancel"
                            onClick={() => {
                                navigate(`/detail/${keyValue}`);
                            }}
                        >
                            취소
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}

export default Form;
