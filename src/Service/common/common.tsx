import axios from "axios";

const http = axios.create({
  baseURL: process.env.REACT_APP_api_base_url,
  timeout: 16000,
  headers: {
    "Content-type": "application/json",
  },
});
export default http;
