<template>
  <button @click.stop="openModalEditBoard" class="ButtonOpenModalEditBoard">
    <font-awesome-icon
      class="ButtonOpenModalEditBoard__icon"
      :icon="['fas', 'ellipsis-v']"
    />
  </button>
</template>

<script>
export default {
  name: "ButtonOpenModalEditBoard",
  methods: {
    openModalEditBoard() {
      this.$emit("open");
    }
  }
};
</script>

<style scoped lang="scss">
.ButtonOpenModalEditBoard {
  width: 25px;
  height: 25px;
  background-color: transparent;
  transition: background-color ease-out 0.3s;
  border-radius: 5px;

  &:hover {
    background-color: $COLOR_BASE;
  }

  &__icon {
    width: 6px;
    height: inherit;
    color: $COLOR_BUTTON;
  }
}
</style>
