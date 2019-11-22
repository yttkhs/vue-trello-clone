import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const vueTrelloClone = {
  state: {
    "vue-trello-clone": null
  },
  mutations: {
    fetch(state, payload) {
      state["vue-trello-clone"] = payload;
    }
  }
};

export default new Vuex.Store({
  modules: {
    vueTrelloClone: vueTrelloClone
  }
});
