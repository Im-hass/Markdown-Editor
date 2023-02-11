import { basicRequest } from "./base";

const SERVICE = "/api/login";

export const login = async (data) => {
    const res = await basicRequest.post(`${SERVICE}`, data);
    return res;
};
