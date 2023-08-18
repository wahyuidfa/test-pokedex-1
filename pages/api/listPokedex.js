import config from "../../config";
const axios = require("axios");
export default (req, res) => {
  const url = config.apiBaseUrl;
  axios
    .get(`${url}/pokemon?limit=900`)
    .then((res2) => {
      const response = res2.data;
      if (response) res.status(200).json(response);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
