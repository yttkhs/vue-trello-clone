<template>
  <button @click="deleteData" class="ButtonListDelete">
    <font-awesome-icon :icon="['fas', 'times']" />削除
  </button>
</template>

<script>
export default {
  name: "ButtonCardDelete",
  methods: {
    deleteData() {
      this.$emit("delete");
    }
  }
};
</script>

<style scoped lang="scss">
.ButtonListDelete {
  width: 80px;
  border-radius: 5px;
  height: 30px;
  font-size: 14px;
  line-height: 15px;
  padding: 7.5px 0;
  background-color: $COLOR_RED;
  color: #fff;
  transition: background-color ease-out 0.3s;
  border: 0;

  &:hover {
    cursor: pointer;
  }

  &.no-input {
    cursor: not-allowed;
    background-color: lighten($COLOR_RED, 20%);
  }

  svg {
    margin-right: 5px;
  }
}
</style>
