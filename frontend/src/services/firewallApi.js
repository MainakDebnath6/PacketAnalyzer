import axios from "axios";

const API = "http://localhost:5000/api/firewall";

export const getRules = async () => {
    const res = await axios.get(API);
    return res.data;
};

export const addBlockedIP = async (ip) => {
    const res = await axios.post(`${API}/ip`, {
        ip
    });

    return res.data;
};

export const removeBlockedIP = async (ip) => {
    const res = await axios.delete(`${API}/ip/${ip}`);
    return res.data;
};

export const addBlockedDomain = async (domain) =>
    (await axios.post(`${API}/domain`, { domain })).data;

export const removeBlockedDomain = async (domain) =>
    (await axios.delete(`${API}/domain/${encodeURIComponent(domain)}`)).data;

export const addBlockedPort = async (port) =>
    (await axios.post(`${API}/port`, { port })).data;

export const removeBlockedPort = async (port) =>
    (await axios.delete(`${API}/port/${port}`)).data;

export const addBlockedApp = async (app) =>
    (await axios.post(`${API}/app`, { app })).data;

export const removeBlockedApp = async (app) =>
    (await axios.delete(`${API}/app/${encodeURIComponent(app)}`)).data;