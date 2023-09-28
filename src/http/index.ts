import axios from 'axios';

export const BASE_URL = "http://localhost:8081/";
export const API_URL = `${BASE_URL}api`

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json', // Set the content type to JSON
        "Access-Control-Allow-Origin": "*"
    },
})

$api.interceptors.response.use((config) => {
    return config;
});

export default $api;
