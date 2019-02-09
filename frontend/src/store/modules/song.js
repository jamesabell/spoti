import songApi from "@/api/song";

const state = {
  playerInfo: {},
  vetoUserIds: []
};

const getters = {
  playerInfo: ({ playerInfo }) => playerInfo,
  vetoUserIds: ({ vetoUserIds }) => vetoUserIds,
  albumUrl: ({ playerInfo }) =>
    playerInfo.item ? playerInfo.item.album.images[0].url : ""
};

const actions = {
  async veto() {
    songApi.veto();
  }
};

const mutations = {
  set_playerInfo(state, payload) {
    state.playerInfo = payload;
  },
  set_vetoUserIds(state, payload) {
    state.vetoUserIds = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
