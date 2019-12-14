<template>
  <button @click="open" class="ButtonOpenModalEditCard">
    <font-awesome-icon
      class="ButtonOpenModalEditCard__icon"
      :icon="['fas', 'ellipsis-v']"
    />
  </button>
</template>

<script>
export default {
  name: "ButtonOpenModalEditCard",
  methods: {
    open() {
      this.$emit("open");
    }
  }
};
</script>

<style scoped lang="scss">
.ButtonOpenModalEditCard {
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
