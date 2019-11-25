import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const vueTrelloClone = {
  state: {
    "vue-trello-clone": []
  },
  mutations: {
    fetch(state, data) {
      state["vue-trello-clone"] = data;
    }
  }
};

export const newBoardModal = {
  state: {
    modal: false
  },
  mutations: {
    toggle(state, payload) {
      state.modal = payload;
    }
  }
};

export default new Vuex.Store({
  modules: {
    vueTrelloClone: vueTrelloClone,
    newBoardModal: newBoardModal
  }
});
