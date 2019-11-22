import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const vueTrelloClone = {
  state: {
    "vue-trello-clone": []
  },
  mutations: {
    fetch(state, payload) {
      state["vue-trello-clone"] = payload;
    }
  },
  actions: {}
};

export default new Vuex.Store({
  modules: {
    vueTrelloClone: vueTrelloClone
  }
});
