import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Toolbar.css";

function Toolbar() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [isLogin, setIsLogin] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
        console.log("로그아웃");
    };

    useEffect(() => {
        if (token !== null) {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    }, [token]);

    return (
        <div className="toolbar-wrap">
            {isLogin ? (
                <>
                    <Link to="/list">조회</Link>
                    <Link to="/registration">등록</Link>
                    <button onClick={handleLogout}>로그아웃</button>
                </>
            ) : (
                <Link to="/">로그인</Link>
            )}
        </div>
    );
}

export default Toolbar;
