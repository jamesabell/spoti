import userApi from "@/api/user";

const state = {
  items: {},
  count: 0
};

const getters = {
  list: ({ items }) => items,
  count: ({ count }) => count
};

const actions = {
  loggedIn() {
    // @todo rename this, I dont like it
    userApi.loggedIn();
  }
};

const mutations = {
  set_list(state, payload) {
    state.items = payload;
  },
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
