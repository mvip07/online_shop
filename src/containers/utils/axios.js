import axios from "axios";
import { host } from "./url";

const defaultOptions = {

  baseURL: `${host}`,
  headers: {
    "Content-Type": "application/json",
  },
};

let API = axios.create(defaultOptions);
const token = localStorage.getItem("onlineShopUserToken");

API.interceptors.request.use(function (config) {
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export default API;
