import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chat-application-nu-rouge.vercel.app/api" : "/api",
  withCredentials: true,
});
