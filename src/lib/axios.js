import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chat-application-a0h8.onrender.com/api" : "/api",
  withCredentials: true,
});
