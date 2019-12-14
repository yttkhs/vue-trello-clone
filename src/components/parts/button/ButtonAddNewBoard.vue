<template>
  <button @click="clickButton" class="button-add-new-board">
    <font-awesome-icon :icon="['fas', 'plus-circle']" />作成する
  </button>
</template>

<script>
export default {
  name: "ButtonAddNewBoard",
  methods: {
    clickButton() {
      this.$emit("clickButton");
    }
  }
};
</script>

<style scoped lang="scss">
.button-add-new-board {
  margin-top: 10px;
  width: 100px;
  border-radius: 5px;
  height: 30px;
  font-size: 14px;
  line-height: 30px;
  background-color: $COLOR_GREEN;
  color: #fff;
  transition: background-color ease-out 0.3s;

  &.no-input {
    cursor: not-allowed;
    background-color: lighten($COLOR_GREEN, 20%);
  }

  svg {
    margin-right: 5px;
  }
}
</style>
