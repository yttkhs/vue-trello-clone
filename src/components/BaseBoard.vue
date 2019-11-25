<template>
  <div class="base-board">
    <div class="base-board--lists">
      <base-list />
    </div>
  </div>
</template>

<script>
import BaseList from "./BaseList";
export default {
  name: "BaseBoard",
  components: { BaseList }
};
</script>

<style scoped lang="scss">
.base-board {
  padding: 10px;
  min-height: calc(100vh - 50px);
  background-color: #f7f7f7;

  &--lists {
    width: 100%;
    display: flex;
  }
}
</style>
