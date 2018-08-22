import axios from "axios";

export default {
  async getData() {
    const response = await axios.get(
      `${process.env.VUE_APP_SERVER_URL}/app-data`
    );
    return response.data;
    // @todo error handling
  }
};
