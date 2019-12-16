<template>
  <button @click="add" class="ButtonAddNewCard">
    <font-awesome-icon :icon="['fas', 'plus-circle']" />カードを追加
  </button>
</template>

<script>
export default {
  name: "ButtonAddNewCard",
  methods: {
    add() {
      this.$emit("add");
    }
  }
};
</script>

<style scoped lang="scss">
.ButtonAddNewCard {
  width: 130px;
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
