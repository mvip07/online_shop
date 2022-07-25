import axios from "axios";
import { host } from "./api";

const defaultOptions = {

  baseURL: `${host}`,
  headers: {
    "Content-Type": "application/json",
  },
};

let API = axios.create(defaultOptions);
const token = JSON.parse(localStorage.getItem("onlineShopUser"))?.token;

API.interceptors.request.use(function (config) {
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export default API;
