<template>
  <div class="base-board">
    <h2 class="base-board--name">
      <font-awesome-icon :icon="['far', 'clipboard']" />
      {{ currentBoardData.name }}
    </h2>
    <div class="base-board--contents">
      <template v-if="listExists">
        <BaseList
          v-for="(list, index) in currentBoardData.list"
          :cards="list.card[index]"
          :name="list.name"
          :id="list.id"
          :key="list.id"
          class="base-board--contents-item"
        />
      </template>
      <BlockAddList class="base-board--contents-item" />
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
  data() {
    return {};
  },
  computed: {
    ...mapState({
      currentBoard: state => state.currentBoard.number,
      vueTrelloCloneData: state => state.vueTrelloClone["vue-trello-clone"]
    }),
    currentBoardData() {
      return this.vueTrelloCloneData.board[this.currentBoard];
    },
    listExists() {
      return (
        this.vueTrelloCloneData.board[this.currentBoard].list !== undefined
      );
    }
  }
};
</script>

<style scoped lang="scss">
.base-board {
  padding: 10px;
  min-height: calc(100vh - 50px);
  background-color: #f7f7f7;

  &--name {
    font-size: 16px;
    color: #666;
    line-height: 32px;
    background: #ddd;
    padding: 0 10px;
    letter-spacing: 0.1em;
    display: inline-block;

    svg {
      margin-right: 3px;
    }
  }

  &--contents {
    width: 100%;
    display: flex;
    align-items: flex-start;
    margin-top: 20px;

    &-item {
      &:not(:first-of-type) {
        margin-left: 10px;
      }
    }
  }
}
</style>
