import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "100.20.92.101/api" : "/api",
  withCredentials: true,
});
