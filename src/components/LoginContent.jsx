import React, { useState } from "react";
import { login } from "../store/api/login";
import { useNavigate } from "react-router-dom";

function LoginContent() {
    const navigate = useNavigate();
    const [inputData, setInputData] = useState({
        loginId: "",
        password: "",
    });

    const handleSubmitLogin = (e) => {
        e.preventDefault();

        if (inputData.loginId.length !== 0 && inputData.password.length !== 0) {
            login(inputData).then((res) => {
                if (res.data.data.result) {
                    localStorage.setItem("token", res.headers.authorization);
                    navigate("/list");
                } else {
                    console.log("로그인 실패");
                    console.log(res);
                }
            });
        }
    };

    const handleInputValue = (e) => {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <h1>로그인</h1>
            <form onSubmit={handleSubmitLogin}>
                <div className="box">
                    <span>Id</span>
                    <input
                        type="text"
                        name="loginId"
                        id="loginId"
                        onChange={handleInputValue}
                    />
                </div>
                <div className="box">
                    <span>Password</span>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={handleInputValue}
                    />
                </div>
                <button type="submit" className="btn">
                    로그인
                </button>
            </form>
        </div>
    );
}

export default LoginContent;
