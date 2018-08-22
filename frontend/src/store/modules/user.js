import userApi from "@/api/user";

const state = {
  count: 0
};

const getters = {
  count: ({ count }) => count
};

const actions = {
  loggedIn() {
    // @todo rename this, I dont like it
    userApi.loggedIn();
  }
};

const mutations = {
  set_count(state, payload) {
    state.count = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
