<template>
  <button @click="clickButton" class="ButtonInitialAddNewBoard">
    <font-awesome-icon :icon="['fas', 'plus-circle']" />新規ボードを作成する
  </button>
</template>

<script>
export default {
  name: "ButtonInitialAddNewBoard",
  methods: {
    clickButton() {
      this.$emit("open");
    }
  }
};
</script>

<style scoped lang="scss">
.ButtonInitialAddNewBoard {
  margin: 20px auto 0;
  display: block;
  border-radius: 5px;
  padding: 1px 10px 0;
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
