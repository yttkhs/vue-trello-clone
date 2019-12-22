<template>
  <div class="BaseBoardList" @click="changCurrentBoard">
    <span class="BaseBoardList__name">{{ this.name }}</span>
    <ButtonOpenModalEditBoard @open="openModalEditBoard" />
  </div>
</template>

<script>
import ButtonOpenModalEditBoard from "./button/ButtonOpenModalEditBoard";
import { mapMutations, mapState } from "vuex";
import normalizeObj from "../../lib/normalizeObj";

export default {
  name: "BaseBoardList",
  components: { ButtonOpenModalEditBoard },
  props: {
    id: Number,
    name: String
  },
  computed: {
    ...mapState({
      appData: state => state.vueTrelloClone["vue-trello-clone"]
    })
  },
  methods: {
    ...mapMutations([
      "changeBoard",
      "toggleModalEditBoard",
      "setBoardData",
      "setData"
    ]),
    changCurrentBoard() {
      this.changeBoard(this.id);
      this.setCurrentBoardNum();
    },
    setCurrentBoardNum() {
      const data = normalizeObj(this.appData);
      const id = this.id;
      data.board.forEach((val, index) => {
        data.board[index].current = index === id;
      });
      this.setData(data);
    },
    openModalEditBoard() {
      this.toggleModalEditBoard(true);
      this.setBoardData({ id: this.id, name: this.name });
    }
  }
};
</script>

<style scoped lang="scss">
.BaseBoardList {
  padding: 7.5px 5px 7.5px 10px;
  display: flex;
  background-color: #fff;
  transition: background-color ease-out 0.3s;

  &:hover {
    background-color: darken($COLOR_WHITE, 3);
    cursor: pointer;
  }

  &__name {
    font-size: 14px;
    line-height: 25px;
    color: $COLOR_TEXT;
    flex: 1;
    letter-spacing: 0.01em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
