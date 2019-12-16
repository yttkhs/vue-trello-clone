<template>
  <button @click="open" class="ButtonOpenAddNewListForm">
    <font-awesome-icon :icon="['fas', 'plus-circle']" />リストを追加
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
.ButtonOpenAddNewListForm {
  width: 100%;
  border-radius: 5px;
  line-height: 40px;
  font-size: 14px;
  background-color: $COLOR_BUTTON;
  color: #fff;
  transition: background-color ease-out 0.3s;

  &:hover {
    background-color: darken($COLOR_BUTTON, 10%);
  }

  svg {
    margin-right: 5px;
  }
}
</style>
