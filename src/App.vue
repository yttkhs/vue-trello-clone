<template>
  <div id="app">
    <TheHeader />
    <BaseBoard />
    <button @click="setLocalStorage">ボタン</button>
  </div>
</template>

<script>
import { LocalStorage } from "./lib/LocalStorage";
import TheHeader from "./components/TheHeader";
import BaseBoard from "./components/BaseBoard";

const STORAGE_KEY = "vue-trello-clone";

export default {
  name: "app",
  components: { BaseBoard, TheHeader },
  created() {
    this.$store.commit("fetch", LocalStorage.fetch(STORAGE_KEY));
  },
  computed: {
    vueTrelloCloneData() {
      return this.$store.state.vueTrelloClone[STORAGE_KEY];
    }
  },
  methods: {
    setLocalStorage: function() {
      this.$store.commit("fetch", ["ワロタ"]);
    }
  },
  watch: {
    // 算出プロパティ"vueTrelloCloneData"を監視
    vueTrelloCloneData() {
      LocalStorage.set(STORAGE_KEY, this.vueTrelloCloneData);
    }
  }
};
</script>

<style lang="scss">
#app {
}
</style>
