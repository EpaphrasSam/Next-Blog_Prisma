const axios = require("axios").default;

const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/"
    : "https://blogosphere-ng6fmu5oa-epaphrassam.vercel.app/";

export default axios.create({
  baseURL: url,
  withCredentials: true,
});
