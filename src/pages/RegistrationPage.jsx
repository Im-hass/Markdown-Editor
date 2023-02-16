import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Form from "../components/Form";

function RegistrationPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [isLogin, setIsLogin] = useState(false);
    const [header, setHeader] = useState();

    useEffect(() => {
        if (token !== null) {
            setIsLogin(true);
        } else {
            setIsLogin(false);
            navigate("/");
        }

        if (location.pathname === "/registration") {
            setHeader("등록");
        } else {
            setHeader("수정");
        }
    }, [token, navigate, location.pathname]);

    if (isLogin) {
        return <>{header && <Form header={header} />}</>;
    }

    return <></>;
}

export default RegistrationPage;
