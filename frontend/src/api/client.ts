import axios from "axios";

export default {
  async authorizeToken(token: string) {
    console.log("authorizeToken");
    return await axios.post(
      `${process.env.VUE_APP_SERVER_URL}/client-access-token`,
      {
        token
      }
    );
  }
};
