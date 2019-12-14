<template>
  <button @click="close" class="button-close-new-board-modal">
    <font-awesome-icon :icon="['fas', 'times-circle']" />
  </button>
</template>

<script>
export default {
  name: "ButtonCloseNewBoardModal",
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped lang="scss">
.button-close-new-board-modal {
  background-color: #444;
  color: #fff;
  font-size: 18px;
  transition: color ease-out 0.3s;

  &:hover {
    color: $COLOR_RED;
  }
}
</style>
