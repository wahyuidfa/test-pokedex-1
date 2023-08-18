import config from "../../config";
const axios = require("axios");
export default (req, res) => {
  const id = parseFloat(req.query.id);
  console.log(id);
  axios
    .get(config.apiBaseUrl + `/nature/${id}`)
    .then((res2) => {
      const response = res2.data;
      if (response) res.status(200).json(response);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
