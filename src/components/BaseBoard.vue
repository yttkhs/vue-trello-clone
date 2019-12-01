<template>
  <div class="base-board">
    <h2 class="base-board--name">{{ currentBoardData.name }}</h2>
    <div class="base-board--lists">
      <template v-if="listExists">
        <base-list />
      </template>
      <BlockAddList />
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
    return {
      currentBoardData: ""
    };
  },
  created() {
    this.currentBoardData = this.vueTrelloCloneData.board[this.currentBoard];
  },
  computed: {
    ...mapState({
      currentBoard: state => state.currentBoard.number,
      vueTrelloCloneData: state => state.vueTrelloClone["vue-trello-clone"]
    }),
    listExists() {
      return this.currentBoardData.list !== undefined;
    }
  },
  methods: {}
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
    margin-top: 20px;
  }
}
</style>
