<template>
  <div id="app">
    <TheHeader />
    <BaseBoard />
  </div>
</template>

<script>
const STORAGE_KEY = "vue-trello-clone";
import TheHeader from "./components/TheHeader";
import BaseBoard from "./components/BaseBoard";
export default {
  name: "app",
  components: { BaseBoard, TheHeader },
  localStorage: {
    "vue-trello-clone": {
      type: Array
    }
  },
  created() {
    this.store.commit(
      "fetch",
      JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
    );
    this.$localStorage.set("vue-trello-clone", this.$store.state["vue-trello-clone"] || []);
  },
  methods: {
    storeLocalStorage() {

    }
  }
};
</script>

<style lang="scss">
#app {
}
</style>
