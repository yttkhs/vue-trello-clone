import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const vueTrelloClone = {
  state: {
    "vue-trello-clone": {}
  },
  mutations: {
    setData(state, data) {
      state["vue-trello-clone"] = data;
    }
  }
};

export const newBoardModal = {
  state: {
    modal: false
  },
  mutations: {
    toggleModal(state, payload) {
      state.modal = payload;
    }
  }
};

export const currentBoard = {
  state: {
    number: null
  },
  mutations: {
    changeNumber(state, payload) {
      state.number = payload;
    }
  }
};

export default new Vuex.Store({
  modules: {
    vueTrelloClone: vueTrelloClone,
    newBoardModal: newBoardModal,
    currentBoard: currentBoard
  }
});
