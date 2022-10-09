import axios from "axios";

export const api = axios.create({
  baseURL: "/api",
  validateStatus: (status: number) => status >= 200 && status < 530,
});

