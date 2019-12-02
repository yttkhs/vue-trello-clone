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
  background-color: #777;
  color: #fff;
  width: 30px;
  transition: color ease-out 0.3s;

  &:hover {
    color: $COLOR_GREEN;
  }
}
</style>
