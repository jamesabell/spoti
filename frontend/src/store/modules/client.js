import clientApi from "../../api/client";

const state = {
  isSignedIn: false,
  isClient: false,
  errorMessage: ""
};

const getters = {
  isSignedIn: ({ isSignedIn }) => isSignedIn,
  errorMessage: ({ errorMessage }) => errorMessage
};

const actions = {
  async setAuthToken({ commit }, authToken) {
    const response = await clientApi.authorizeToken(authToken);
    if (response) {
      commit("set_isSignedIn", true);
      commit("set_errorMessage", "");
    } else {
      commit("set_errorMessage", "Token is invalid");
    }
  }
};

const mutations = {
  set_isClient(state, payload) {
    state.isClient = payload;
  },
  set_errorMessage(state, payload) {
    state.errorMessage = payload;
  },
  set_isSignedIn(state, payload) {
    state.isSignedIn = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
