const axios = require("axios").default;

const url = "http://localhost:3000/";

export default axios.create({
  baseURL: url,
  withCredentials: true,
});
