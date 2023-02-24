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

export const getDetailPolicy = async (keys) => {
    const res = await basicRequest.get(`${SERVICE}/policy/${keys}`);
    return res;
};

export const addNewPolicy = async (token, data) => {
    const res = await basicRequest.post(`${SERVICE}/policy`, {
        headers: {
            Authorization: token,
        },
        data
    });
    return res;
}

export const deletePolicy = async (token, key) => {
    const res = await basicRequest.delete(`${SERVICE}/policy/${key}`, {
        headers: {
            Authorization: token,
        }
    });
    return res;
}