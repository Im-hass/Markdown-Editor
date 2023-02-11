import React, { useEffect, useState } from "react";
import { login } from "./../store/api/login";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [isLogin, setIsLogin] = useState(false);
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
                    console.log("로그인", res);
                    navigate("/list");
                } else {
                    console.log("로그인 실패");
                    console.log(res);
                }
            });
        }
    };

    const handleInputValue = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        if (token !== null) {
            setIsLogin(true);
            navigate("/list");
        } else {
            setIsLogin(false);
        }
    }, [navigate, token]);

    if (!isLogin) {
        <div></div>;
    }

    return (
        <>
            <form onSubmit={handleSubmitLogin}>
                <label htmlFor="loginId">
                    <span>아이디</span>
                    <input
                        type="text"
                        name="loginId"
                        id="loginId"
                        onChange={handleInputValue}
                    />
                </label>
                <label htmlFor="password">
                    <span>비밀번호</span>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={handleInputValue}
                    />
                </label>
                <button type="submit">로그인</button>
            </form>
        </>
    );
}

export default LoginPage;
