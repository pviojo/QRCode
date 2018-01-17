import axios from "axios";
import config from "../config";

const api = {
  login(username, password, cb){
    axios
      .post(config.api.host + "/oauth/token", {
        grant_type: "password",
        client_id: config.api.client_id,
        client_secret: config.api.client_secret,
        username: username,
        password: password,
        scope: ""
      })
      .then(function (response) {
        cb(response);
      })
  }
}

export default api;