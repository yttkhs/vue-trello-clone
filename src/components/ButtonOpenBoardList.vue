<template>
  <button class="button-open-board-list">
    <font-awesome-icon
      :icon="['fas', 'th-list']"
      class="button-open-board-list--icon"
    />ボードリスト
  </button>
</template>

<script>
export default {
  name: "ButtonOpenBoardList"
};
</script>

<style scoped lang="scss">
.button-open-board-list {
  border-radius: 5px;
  font-size: 14px;
  height: 30px;
  line-height: 30px;
  background-color: #777;
  width: 130px;
  color: #fff;
  margin-left: 5px;

  &--icon {
    margin-right: 10px;
  }
}
</style>
