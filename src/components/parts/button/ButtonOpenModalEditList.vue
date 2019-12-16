<template>
  <button @click="openModalEditList" class="ButtonOpenModalEditList">
    <font-awesome-icon
      class="ButtonOpenModalEditList__icon"
      :icon="['fas', 'ellipsis-v']"
    />
  </button>
</template>

<script>
export default {
  name: "ButtonOpenModalEditList",
  methods: {
    openModalEditList() {
      this.$emit("open");
    }
  }
};
</script>

<style scoped lang="scss">
.ButtonOpenModalEditList {
  width: 25px;
  height: 25px;
  background-color: transparent;
  transition: background-color ease-out 0.3s;
  border-radius: 5px;

  &:hover {
    background-color: darken($COLOR_BASE, 8);
  }

  &__icon {
    width: 6px;
    height: inherit;
    color: darken($COLOR_BUTTON, 8);
  }
}
</style>
