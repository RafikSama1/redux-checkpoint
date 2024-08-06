import axios from "axios";

const base = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        Authorization: localStorage.getItem('token') ? `Bearer ${localStorage.getItem("token")}` : null
    }
});

export default base;