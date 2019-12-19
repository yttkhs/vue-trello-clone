<template>
  <div
    class="ModalBoardList"
    @click.self="closeModalBoardList"
    v-show="modalBoardList"
  >
    <div class="ModalBoardList__modal">
      <header class="ModalBoardList__header">
        <h2 class="ModalBoardList__title">ボードリスト</h2>
        <ButtonCloseModalBoardList @close="closeModalBoardList" />
      </header>
      <ul class="ModalBoardList__lists">
        <li
          class="ModalBoardList__list"
          v-for="board in this.appData.board"
          :key="board.id"
        >
          <BaseBoardList :name="board.name" :id="board.id" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import BaseBoardList from "./BaseBoardList";
import ButtonCloseModalBoardList from "./button/ButtonCloseModalBoardList";

export default {
  name: "ModalBoardList",
  components: { ButtonCloseModalBoardList, BaseBoardList },
  computed: {
    ...mapState({
      appData: state => state.vueTrelloClone["vue-trello-clone"],
      modalBoardList: state => state.modalBoardList.modal
    })
  },
  methods: {
    ...mapMutations(["toggleModalBoardList"]),
    closeModalBoardList() {
      this.toggleModalBoardList(false);
    }
  }
};
</script>

<style scoped lang="scss">
.ModalBoardList {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9;

  &__modal {
    width: 300px;
    background-color: #fff;
    position: fixed;
    top: 60px;
    right: 10px;
    border-radius: 5px;
    box-shadow: 0 0 12px 2px rgba(#000, 0.2);
  }

  &__header {
    height: 40px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $COLOR_MODAL_HEAD;
    border-radius: 5px 5px 0 0;
  }

  &__title {
    color: #fff;
    font-size: 14px;
  }

  &__lists {
    border: 3px solid $COLOR_MODAL_HEAD;
    border-radius: 0 0 5px 5px;
    overflow: hidden;
  }

  &__list {
    &:not(:first-child) {
      border-top: 1px solid darken($COLOR_WHITE, 3);
    }
  }
}
</style>
