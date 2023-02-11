import { basicRequest } from "./base";

const SERVICE = "/api/static";

export const getKeyList = async (token) => {
    const res = await basicRequest.get(`${SERVICE}/policy/keys`, {
        headers: {
            Authorization: token,
        },
    });
    return res;
};

export const getDetailPolicy = async (token, keys) => {
    const res = await basicRequest.get(`${SERVICE}/policy/${keys}`, {
        headers: {
            Authorization: token,
        },
    });
    return res;
};