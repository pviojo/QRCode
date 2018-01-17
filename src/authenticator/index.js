import client from "../client/api";

const authenticator = {
  isAuthenticated(){
    return this.getAccessToken()!='';
  },
  getAccessToken(){
    const accessToken = localStorage.getItem("_n_at");
    return accessToken;
  },
  authenticate(username, password, cb) {
    client.login(username, password, (response) => {
      console.log("Login response");
      console.log(response);
      if (response.data.access_token) {
        localStorage.setItem("_n_at", response.data.access_token);
        localStorage.setItem("_n_rt", response.data.refresh_token);
        cb();
      } else {
        localStorage.setItem("_n_at", "");
        localStorage.setItem("_n_rt", "");
      }
    })
      
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

export default authenticator;
