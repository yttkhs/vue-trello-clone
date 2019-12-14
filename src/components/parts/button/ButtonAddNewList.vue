<template>
  <button @click="add" class="button-add-new-list">
    <font-awesome-icon :icon="['fas', 'plus-circle']" />リストを追加
  </button>
</template>

<script>
export default {
  name: "ButtonAddNewList",
  methods: {
    add() {
      this.$emit("add");
    }
  }
};
</script>

<style scoped lang="scss">
.button-add-new-list {
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
