import axios from "axios";

export const api = axios.create({
    baseURL: "https://myfinancess.netlify.app/",
})