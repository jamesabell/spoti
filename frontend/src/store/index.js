import Vue from "vue";
import Vuex from "vuex";
import client from "@/store/modules/client";
import song from "@/store/modules/song";
import user from "@/store/modules/user";
import appApi from "@/api/app";
import sampleData from "@/data";

Vue.use(Vuex);

const state = {
  isLoading: false
};

const actions = {
  async updateData({ commit }) {
    if (process.env.VUE_APP_SERVER_URL !== "") {
      const appData = await appApi.getData();
      commit("song/set_playerInfo", appData.playerInfo, {
        root: true
      });
      commit("song/set_vetos", appData.vetoCount, {
        root: true
      });
      commit("user/set_count", appData.userCount, {
        root: true
      });
      commit("client/set_isSignedIn", appData.clientIsSignedIn, {
        root: true
      });
    } else {
      // @todo Should be mocking theses in api
      commit("song/set_playerInfo", sampleData.playerInfo, {
        root: true
      });
      commit("song/set_vetos", 1, {
        root: true
      });
      commit("user/set_count", 10, {
        root: true
      });
      commit("client/set_isSignedIn", true, {
        root: true
      });
    }
  },
  isLoading({ commit }, isLoading) {
    commit("set_isLoading", isLoading);
  }
};

const mutations = {
  set_isLoading(store, payload) {
    store.isLoading = payload;
  }
};

export default new Vuex.Store({
  modules: {
    client,
    song,
    user
  },
  state,
  actions,
  mutations
});
