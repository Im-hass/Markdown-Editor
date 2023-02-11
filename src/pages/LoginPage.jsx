import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginContent from "./../components/LoginContent";

function LoginPage() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [isLogin, setIsLogin] = useState(false);

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
            <LoginContent />
        </>
    );
}

export default LoginPage;
