<template>
  <div class="base-list">
    <h3 class="base-list--name"></h3>
    <ul class="base-list--items">
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BaseList"
};
</script>

<style scoped lang="scss">
.base-list {
  width: $BASE_LIST_WIDTH;
  background-color: #999;
  padding: 5px;

  &:not(:first-of-type) {
    margin-left: 10px;
  }

  &--items {
    width: 100%;
  }
}
</style>
