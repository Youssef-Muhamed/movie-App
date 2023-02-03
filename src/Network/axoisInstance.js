import axios from "axios";

export const axiosInstance  = 
    axios.create({
        baseURL: "https://api-generator.retool.com/K3FTTT/"
    })