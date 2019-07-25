import axios from "axios";

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-auth.token"];
  }
};

axios.interceptors.request.use(config => {
  if (config.url.includes("s3.amazonaws.com")) {
    config.headers = {};
  }
  console.log("config", config);
  return config;
});

export default setAuthToken;
