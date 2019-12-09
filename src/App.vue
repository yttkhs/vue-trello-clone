<template>
  <div id="app">
    <TheHeader />
    <ModalNewBoard />
    <BaseBoard v-if="boardExists" />
    <TheInitialScreen v-else />
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import { LocalStorage } from "./lib/LocalStorage";
import TheHeader from "./components/TheHeader";
import BaseBoard from "./components/BaseBoard";
import ModalNewBoard from "./components/ModalNewBoard";
import TheInitialScreen from "./components/TheInitialScreen";

const STORAGE_KEY = "vue-trello-clone";

export default {
  name: "app",
  components: { TheInitialScreen, ModalNewBoard, BaseBoard, TheHeader },
  created() {
    this.setData(LocalStorage.fetch(STORAGE_KEY));
    this.changeNumber(this.fetchCurrentBoard());
  },
  computed: {
    ...mapState({
      currentBoard: state => state.currentBoard.number,
      vueTrelloCloneData: state => state.vueTrelloClone["vue-trello-clone"]
    }),
    boardExists() {
      return this.currentBoard !== null;
    }
  },
  methods: {
    ...mapMutations(["setData", "changeNumber"]),
    fetchCurrentBoard() {
      const data = this.vueTrelloCloneData.board;
      if (data) {
        return data.findIndex(board => board.current === true);
      } else {
        return null;
      }
    }
  },
  watch: {
    vueTrelloCloneData() {
      LocalStorage.set(STORAGE_KEY, this.vueTrelloCloneData);
    }
  }
};
</script>

<style lang="scss">
@import "~reset.css";
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700&display=swap");

*,
*::before,
*::after {
  box-sizing: border-box;
}

button[class^="button-"] {
  border: 0;
  padding: 0;

  &:hover {
    cursor: pointer;
  }
}

input {
  width: 100%;
  font-size: 16px;
  line-height: 30px;
  border-radius: 2.5px;
  padding: 2.5px 10px;
  border: 0;
  color: #222;
  background-color: rgba(#fff, 0.6);

  &:focus {
    background-color: rgba(#fff, 0.8);
  }
}

body {
  font-family: "Noto Sans JP", sans-serif;
}
</style>
