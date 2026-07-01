import axios from "axios";

export const uploadPcap = async (file) => {
    const formData = new FormData();
    formData.append("pcap", file);

    const res = await axios.post(
        "http://localhost:5000/api/scan/upload",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
    );

    return res.data;
};