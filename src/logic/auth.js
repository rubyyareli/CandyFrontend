import axios from "axios";
//import Cookies from "js-cookie";

//const ENDPOINT_PATH = "https://reqres.in/api/";

export default {
  /*setUserLogged(userLogged) {
    Cookies.set("userLogged", userLogged);
  },
  getUserLogged() {
    return Cookies.get("userLogged");
  },*/
  register(email, password) {
    const user = { email, password };
    return axios.post("http://localhost:9000/USER/", user);
  },
  login(email, password) {
    const user = { email, password };
    return axios.get("http://localhost:9000/USER/"+email+"/correo", user);
  }
};
