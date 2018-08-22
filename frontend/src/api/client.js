import axios from "axios";

export default {
  async authorizeToken(token) {
    return await axios.post(
      `${process.env.VUE_APP_SERVER_URL}/client-access-token`,
      {
        token
      }
    );
  }
};
