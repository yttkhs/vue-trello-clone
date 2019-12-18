<template>
  <button @click="closeModalBoardList" class="ButtonCloseModalBoardList">
    <font-awesome-icon :icon="['fas', 'times-circle']" />
  </button>
</template>

<script>
export default {
  name: "ButtonCloseModalBoardList",
  methods: {
    closeModalBoardList() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped lang="scss">
.ButtonCloseModalBoardList {
  background-color: $COLOR_MODAL_HEAD;
  color: #fff;
  font-size: 18px;
  padding: 0;
  border: 0;
  transition: color ease-out 0.3s;

  &:hover {
    color: $COLOR_RED;
    cursor: pointer;
  }
}
</style>
