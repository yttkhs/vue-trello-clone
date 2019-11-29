<template>
  <div id="app">
    <TheHeader />
    <ModalNewBoard />
    <BaseBoard />
  </div>
</template>

<script>
import { LocalStorage } from "./lib/LocalStorage";
import TheHeader from "./components/TheHeader";
import BaseBoard from "./components/BaseBoard";
import ModalNewBoard from "./components/ModalNewBoard";

const STORAGE_KEY = "vue-trello-clone";

export default {
  name: "app",
  components: { ModalNewBoard, BaseBoard, TheHeader },
  created() {
    this.$store.commit("setData", LocalStorage.fetch(STORAGE_KEY));
  },
  computed: {
    vueTrelloCloneData() {
      return this.$store.state.vueTrelloClone["vue-trello-clone"];
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
