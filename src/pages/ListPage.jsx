import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListContent from "../components/ListContent";

function ListPage() {
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
                <ListContent />
            </>
        );
    }

    return <></>;
}

export default ListPage;
