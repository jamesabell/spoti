import axios from "axios";

export default {
  async loggedIn() {
    const user = localStorage.getItem("user");
    if (user) {
      return await axios.post(`${process.env.VUE_APP_SERVER_URL}/add-user`, {
        user: user
      });
    }
  }
};
