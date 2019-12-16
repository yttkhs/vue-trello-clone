<template>
  <button @click="closeModalEditList" class="ButtonCloseModalEditList">
    <font-awesome-icon :icon="['fas', 'times-circle']" />
  </button>
</template>

<script>
export default {
  name: "ButtonCloseModalEditList",
  methods: {
    closeModalEditList() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped lang="scss">
.ButtonCloseModalEditList {
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
