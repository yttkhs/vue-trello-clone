<template>
  <button class="button-open-block-add-list" @click="open">
    <font-awesome-icon :icon="['fas', 'plus-circle']" />リストを追加する
  </button>
</template>

<script>
export default {
  name: "ButtonOpenAddNewListForm",
  methods: {
    open() {
      this.$emit("open");
    }
  }
};
</script>

<style scoped lang="scss">
.button-open-block-add-list {
  width: $BASE_LIST_WIDTH;
  border-radius: 5px;
  line-height: 40px;
  font-size: 14px;
  background-color: transparent;
  color: #fff;
  transition: color ease-out 0.3s;

  &:hover {
    color: #666;
  }

  svg {
    margin-right: 5px;
  }
}
</style>
