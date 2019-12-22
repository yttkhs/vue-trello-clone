<template>
  <button @click="openModalBoardList" class="ButtonOpenBoardList">
    <font-awesome-icon :icon="['fas', 'th-list']" />ボードリスト
  </button>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ButtonOpenBoardList",
  computed: {
    ...mapState({
      curBoardNum: state => state.curBoard.number,
      appData: state => state.vueTrelloClone["vue-trello-clone"]
    }),
    boardExists() {
      return this.curBoardNum !== null;
    }
  },
  methods: {
    openModalBoardList() {
      if (this.boardExists) {
        this.$emit("open");
      } else {
        alert("ボードがありません。\n新規ボードを作成してください。");
      }
    }
  }
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
