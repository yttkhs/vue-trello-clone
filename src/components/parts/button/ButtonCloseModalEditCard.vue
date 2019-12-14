<template>
  <button @click="closeModalEditCard" class="ButtonCloseModalEditCard">
    <font-awesome-icon :icon="['fas', 'times-circle']" />
  </button>
</template>

<script>
export default {
  name: "ButtonCloseModalEditCard",
  methods: {
    closeModalEditCard() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped lang="scss">
.ButtonCloseModalEditCard {
  background-color: #444;
  color: #fff;
  font-size: 18px;
  padding: 0;
  border: 0;
  transition: color ease-out 0.3s;

  &:hover {
    color: $COLOR_RED;
    cursor: pointer;
  }
}
</style>