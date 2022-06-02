import axios from "axios";
import { useContext } from "react";

const defaultOptions = {

  baseURL: "http://localhost:8000/",
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
