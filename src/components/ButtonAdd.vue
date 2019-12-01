<template>
  <button class="button-add">
    <font-awesome-icon :icon="['fas', 'plus-circle']" />作成する
  </button>
</template>

<script>
export default {
  name: "ButtonAdd"
};
</script>

<style scoped lang="scss">
.button-add {
  margin-top: 10px;
  width: 100px;
  border-radius: 2.5px;
  height: 30px;
  font-size: 14px;
  line-height: 30px;
  background-color: $COLOR_GREEN;
  color: #fff;

  &.no-input {
    cursor: not-allowed;
    background-color: lighten($COLOR_GREEN, 20%);
  }

  svg {
    margin-right: 5px;
  }
}
</style>
