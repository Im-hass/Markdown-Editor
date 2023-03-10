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
    console.log(`${SERVICE}/policy`, data);
    const res = await basicRequest.post(`${SERVICE}/policy`, data, {
        headers: {
            Authorization: token,
        },
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

export const modifyPolicy = async (token, data) => {
    const res = await basicRequest.put(`${SERVICE}/policy/${data.key}`, data, {
        headers: {
            Authorization: token,
        }
    });
    return res;
}