<template>
  <div class="base-list">
    <div class="base-list--wrap">
      <template>
        <button class="button-add-list">リストを追加する</button>
      </template>
      <template>
        <ul class="base-list--items"></ul>
      </template>
    </div>
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

  &:not(:first-of-type) {
    margin-left: 10px;
  }

  &--items {
    width: $BASE_LIST_WIDTH;
    background-color: #999;
    padding: 5px;
  }
}

.button-add-list {
  width: $BASE_LIST_WIDTH;
  background-color: #aaa;
  border-radius: 5px;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: #fff;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
}
</style>
