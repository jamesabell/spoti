import axios from "axios";
import * as playerInfo from "@/data";

export default {
  async getData(state) {
    if (process.env.VUE_APP_API_SERVER_URL === "") {
      return {
        clientIsSignedIn: state.clientIsSignedIn,
        vetoCount: state.song.vetoCount,
        userCount: state.user.count,
        playerInfo: state.song.playerInfo
      };
    }
    const response = await axios.get(
      `${process.env.VUE_APP_API_SERVER_URL}/app-data`
    );
    return response.data;
    // @todo error handling
  }
};
