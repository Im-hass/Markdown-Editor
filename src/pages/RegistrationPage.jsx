import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";

function RegistrationPage() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        if (token !== null) {
            setIsLogin(true);
        } else {
            setIsLogin(false);
            navigate("/");
        }
    }, [token, navigate]);

    if (isLogin) {
        return (
            <>
                <Form />
            </>
        );
    }

    return <></>;
}

export default RegistrationPage;
