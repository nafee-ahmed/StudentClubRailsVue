import axios from "axios";

export const backendLink = "http://localhost:3000";

export const ax = axios.create({
  baseURL: backendLink,
});
