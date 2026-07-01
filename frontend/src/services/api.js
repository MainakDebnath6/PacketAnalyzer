import axios from "axios";

const API =
    import.meta.env.VITE_API_URL ||
    "http://localhost:5000";

export const uploadPcap = async (file) => {
    const formData = new FormData();
    formData.append("pcap", file);

    const res = await axios.post(
        `${API}/api/scan/upload`,
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
    );

    return res.data;
};