import axios from "axios";

export default {
  async veto() {
    const user = localStorage.getItem("user");
    return await axios.post(`${process.env.VUE_APP_API_SERVER_URL}/veto`, {
      user: user
    });
  }
};
