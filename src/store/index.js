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

export const modalNewBoard = {
  state: {
    modal: false
  },
  mutations: {
    toggleBoardModal(state, payload) {
      state.modal = payload;
    }
  }
};

export const modalEditCard = {
  state: {
    modal: false,
    data: {}
  },
  mutations: {
    toggleCardModal(state, payload) {
      state.modal = payload;
    },
    setCardData(state, data) {
      state.data = data;
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
    modalNewBoard: modalNewBoard,
    modalEditCard: modalEditCard,
    currentBoard: currentBoard
  }
});
