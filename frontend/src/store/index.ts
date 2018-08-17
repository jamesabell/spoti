import Vue from "vue";
import Vuex from "vuex";
import client from "@/store/modules/client";

Vue.use(Vuex);

const state = {
  isLoading: false
};

const actions = {
  isLoading({ commit, state }: any, isLoading: boolean) {
    commit("set_isLoading", isLoading);
  }
};

const mutations = {
  set_isLoading(store: any, payload: boolean) {
    store.isLoading = payload;
  }
};

export default new Vuex.Store({
  modules: {
    client
  },
  state,
  actions,
  mutations
});
