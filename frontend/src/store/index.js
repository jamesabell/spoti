import Vue from "vue";
import Vuex from "vuex";
import client from "@/store/modules/client";
import song from "@/store/modules/song";
import user from "@/store/modules/user";
import appApi from "@/api/app";

Vue.use(Vuex);

const state = {
  isLoading: false
};

const actions = {
  async updateData({ commit }) {
    const appData = await appApi.getData();
    commit("song/set_playerInfo", appData.playerInfo, {
      root: true
    });
    commit("song/set_vetoUserIds", appData.vetoUserIds, {
      root: true
    });
    commit("user/set_count", appData.userCount, {
      root: true
    });
    commit("client/set_isSignedIn", appData.clientIsSignedIn, {
      root: true
    });
    commit("user/set_list", appData.users, {
      root: true
    });
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
