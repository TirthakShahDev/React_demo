import axios from "axios";
import { store } from "../store";

const service = axios.create({
  baseURL: process.env.REACT_APP_BASE_API, // url = base url + request url
  timeout: 5000
});

// Request interceptors Customize based on your need
service.interceptors.request.use(
  config => {
    // Add X-Access-Token header to every request, you can add other custom headers here
    const state = store.getState();

    if (state.UserData && state.UserData.token) {
      config.headers["X-Access-Token"] = state.UserData.token;
    }
    return config;
  },
  error => {
    alert(error);
    Promise.reject(error);
  }
);

// Response interceptors Customize based on your need
service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.code !== 20000) {
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return response.data;
    }
  },
  error => {
    alert(error);
    // Log somewhere
    console.error(error);
    switch (error.response.status) {
      // Authorization Failed Response can add other status codes here to manage error Logging
      case 403: 
        break;
      default:
        break;
    }
    return Promise.reject(error);
  }
);

export default service;
