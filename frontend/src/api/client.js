import axios from "axios";

export default {
  async authorizeToken(token) {
    console.log();
    return await axios.post(
      `${process.env.VUE_APP_API_SERVER_URL}/client-access-token`,
      {
        token
      }
    );
  }
};
