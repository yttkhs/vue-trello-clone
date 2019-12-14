<template>
  <button @click="complete" class="ButtonCardEditComplete">
    <font-awesome-icon :icon="['fas', 'check']" />完了
  </button>
</template>

<script>
export default {
  name: "ButtonCardEditComplete",
  methods: {
    complete() {
      this.$emit("complete");
    }
  }
};
</script>

<style scoped lang="scss">
.ButtonCardEditComplete {
  width: 80px;
  border-radius: 5px;
  height: 30px;
  font-size: 14px;
  line-height: 15px;
  padding: 7.5px 0;
  background-color: $COLOR_GREEN;
  color: #fff;
  transition: background-color ease-out 0.3s;

  &:hover {
    cursor: pointer;
  }

  &.no-input {
    cursor: not-allowed;
    background-color: lighten($COLOR_GREEN, 20%);
  }

  svg {
    margin-right: 5px;
  }
}
</style>
