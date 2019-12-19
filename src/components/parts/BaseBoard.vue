<template>
  <div class="BaseBoard">
    <h2 class="BaseBoard__name">
      <font-awesome-icon :icon="['far', 'clipboard']" />
      {{ currentBoardData.name }}
    </h2>
    <div class="BaseBoard__container">
      <template v-if="listExists">
        <BaseList
          v-for="list in this.currentBoardData.list"
          :cards="list.card"
          :name="list.name"
          :id="list.id"
          :key="list.id"
          class="BaseBoard__content"
        />
      </template>
      <BlockAddList class="BaseBoard__content" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BaseList from "./BaseList";
import BlockAddList from "./BlockAddList";

export default {
  name: "BaseBoard",
  components: { BlockAddList, BaseList },
  computed: {
    ...mapState({
      currentBoard: state => state.currentBoard.number,
      appData: state => state.vueTrelloClone["vue-trello-clone"]
    }),
    currentBoardData() {
      return this.appData.board[this.currentBoard];
    },
    listExists() {
      return this.appData.board[this.currentBoard].list !== undefined;
    }
  }
};
</script>

<style scoped lang="scss">
.BaseBoard {
  padding: 10px;
  min-height: calc(100vh - 50px);
  background-color: #f7f7f7;

  &__name {
    font-size: 16px;
    color: #666;
    line-height: 30px;
    padding: 0 10px;
    letter-spacing: 0.1em;

    svg {
      margin-right: 5px;
    }
  }

  &__container {
    width: 100%;
    display: flex;
    align-items: flex-start;
    margin-top: 10px;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__content {
    flex: none;

    &:not(:first-of-type) {
      margin-left: 10px;
    }
  }
}
</style>
