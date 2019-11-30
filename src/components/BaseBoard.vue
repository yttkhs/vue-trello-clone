<template>
  <div class="base-board">
    <h2 class="base-board--name">{{ currentBoardData.name }}</h2>
    <div class="base-board--lists">
      <base-list />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BaseList from "./BaseList";

export default {
  name: "BaseBoard",
  components: { BaseList },
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
    })
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
  }
}
</style>
