import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";
import { getKeyList } from "../store/api/policy";
import DetailContent from "./DetailContent";
import { useNavigate } from "react-router-dom";

function ListContent() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [data, setData] = useState(null);
    const [isOpenDeatil, setIsOpenDetail] = useState(false);

    const handleDetail = (keyValue) => {
        setIsOpenDetail(true);
        navigate(`/detail/${keyValue}`);
    };

    useEffect(() => {
        getKeyList(token)
            .then((res) => {
                console.log(res);
                setData(res.data.data);
                console.log(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [token]);

    useEffect(() => {
        if (data !== null) {
            setIsOpenDetail(false);
        }
    }, [data]);

    return (
        <>
            {isOpenDeatil ? (
                <DetailContent />
            ) : (
                <>
                    <div>
                        <h1>조회</h1>
                        {data &&
                            data.map((v) => (
                                <ListItem
                                    key={v.index}
                                    keyValue={v.key}
                                    handleDetail={handleDetail}
                                />
                            ))}
                    </div>
                </>
            )}
        </>
    );
}

export default ListContent;
