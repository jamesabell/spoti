import clientApi from "../../api/client";

const state: {} = {
  token: "",
  isSignedIn: false,
  errorMessage: ""
};

const getters: {} = {
  isSignedIn: ({ isSignedIn }: any) => isSignedIn,
  errorMessage: ({ errorMessage }: any) => errorMessage
};

const actions: {} = {
  async authorizeToken({ commit, state }: any, token: string) {
    try {
      const response = await clientApi.authorizeToken(token);
      commit("set_isSignedIn", true);
    } catch (err) {
      commit("set_errorMessage", "Invalid Token");
    }
  }
};

const mutations: {} = {
  set_isSignedIn(state: any, payload: boolean): void {
    console.log("test", payload);
    state.isSignedIn = payload;
  },
  set_errorMessage(state: any, payload: string) {
    state.errorMessage = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
