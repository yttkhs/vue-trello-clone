<template>
  <button class="button-add-board" @click="open">
    <font-awesome-icon :icon="['fas', 'plus-circle']" />
  </button>
</template>

<script>
export default {
  name: "ButtonOpenNewBoardModal",
  methods: {
    open() {
      this.$emit("open");
    }
  }
};
</script>

<style scoped lang="scss">
.button-add-board {
  border-radius: 5px;
  font-size: 14px;
  height: 30px;
  line-height: 30px;
  background-color: $COLOR_BUTTON;
  color: #fff;
  width: 30px;
  transition: background-color ease-out 0.3s;

  &:hover {
    background-color: darken($COLOR_BUTTON, 10%);
  }
}
</style>
