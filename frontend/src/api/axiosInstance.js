import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/api", // VERY IMPORTANT
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;