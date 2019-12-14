<template>
  <button @click="open" class="button-open-add-new-card-form">
    <font-awesome-icon :icon="['fas', 'plus-circle']" />カードを追加
  </button>
</template>

<script>
export default {
  name: "ButtonOpenAddNewCardForm",
  methods: {
    open() {
      this.$emit("open");
    }
  }
};
</script>

<style scoped lang="scss">
.button-open-add-new-card-form {
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
