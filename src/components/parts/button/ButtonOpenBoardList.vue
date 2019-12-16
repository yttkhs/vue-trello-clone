<template>
  <button class="ButtonOpenBoardList">
    <font-awesome-icon :icon="['fas', 'th-list']" />ボードリスト
  </button>
</template>

<script>
export default {
  name: "ButtonOpenBoardList"
};
</script>

<style scoped lang="scss">
.ButtonOpenBoardList {
  border-radius: 5px;
  font-size: 14px;
  height: 30px;
  line-height: 30px;
  background-color: $COLOR_BUTTON;
  width: 130px;
  color: #fff;
  margin-left: 5px;
  transition: background-color ease-out 0.3s;

  &:hover {
    background-color: darken($COLOR_BUTTON, 10%);
  }

  svg {
    margin-right: 10px;
  }
}
</style>
