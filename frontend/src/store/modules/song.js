import songApi from "@/api/song";

const state = {
  playerInfo: {},
  vetos: 0
};

const getters = {
  playerInfo: ({ playerInfo }) => playerInfo,
  vetos: ({ vetos }) => vetos,
  albumUrl: ({ playerInfo }) => playerInfo.item.album.images[0].url
};

const actions = {
  async veto({ commit, state }) {
    songApi.veto();
    commit("set_vetos", state.vetos + 1);
  }
};

const mutations = {
  set_playerInfo(state, payload) {
    state.playerInfo = payload;
  },
  set_vetos(state, payload) {
    state.vetos = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
