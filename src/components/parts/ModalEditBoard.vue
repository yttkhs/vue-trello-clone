<template>
  <div
    class="ModalEditBoard"
    @click.self="closeModalEditBoard"
    v-show="modalExist"
  >
    <div class="ModalEditBoard__modal">
      <header class="ModalEditBoard__header">
        <h2 class="ModalEditBoard__title">ボードを編集する</h2>
        <ButtonCloseModalEditBoard @close="closeModalEditBoard" />
      </header>
      <div class="ModalEditBoard__form">
        <form @submit.prevent="reflectionBoardData">
          <label>
            <input type="text" ref="boardName" v-model="boardName" />
          </label>
        </form>
      </div>
      <div class="ModalEditBoard__button">
        <ButtonBoardEditComplete
          @complete="reflectionBoardData"
          :class="{ 'no-input': !confirmInputValue }"
        />
        <ButtonBoardDelete @delete="deleteBoardData" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonBoardEditComplete from "./button/ButtonBoardEditComplete";
import ButtonBoardDelete from "./button/ButtonBoardDelete";
import ButtonCloseModalEditBoard from "./button/ButtonCloseModalEditBoard";
import { mapMutations, mapState } from "vuex";
import normalizeObj from "../../lib/normalizeObj";

export default {
  name: "ModalEditBoard",
  components: {
    ButtonCloseModalEditBoard,
    ButtonBoardDelete,
    ButtonBoardEditComplete
  },
  data() {
    return {
      boardName: ""
    };
  },
  computed: {
    ...mapState({
      appData: state => state.vueTrelloClone["vue-trello-clone"],
      currentBoard: state => state.currentBoard.number,
      modalExist: state => state.modalEditBoard.modal,
      boardData: state => state.modalEditBoard.data
    }),
    confirmInputValue() {
      return this.boardName.length > 0;
    }
  },
  methods: {
    ...mapMutations(["toggleModalEditBoard", "setData"]),
    reflectionBoardData() {
      if (this.confirmInputValue) {
        this.setNewBoardData();
        this.closeModalEditBoard();
      } else {
        alert("ボードの名前を入力してください");
      }
    },
    setNewBoardData() {
      const data = normalizeObj(this.appData);
      const id = this.boardData.id;
      data.board[id].name = this.boardName;
      this.setData(data);
    },
    deleteBoardData() {
      const data = normalizeObj(this.appData);
      const id = this.boardData.id;
      data.board.splice(id, 1);
      this.setData(data);
      this.assignmentBoardId();
      this.closeModalEditBoard();
    },
    assignmentBoardId() {
      const data = normalizeObj(this.appData);
      const newData = data.board.map((board, index) => ({
        id: index,
        name: board.name,
        current: board.current,
        list: board.list
      }));
      data.board.splice(0);
      data.board = newData;
      this.setData(data);
    },
    closeModalEditBoard() {
      this.toggleModalEditBoard(false);
    }
  },
  watch: {
    modalExist(value) {
      this.$nextTick(() => {
        if (value) this.$refs.boardName.focus();
      });
      if (value) this.boardName = this.boardData.name;
    }
  }
};
</script>

<style scoped lang="scss">
.ModalEditBoard {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(#000, 0.5);
  z-index: 10;

  &__modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: $MODAL_WIDTH;
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

  &__form {
    padding: 10px;
    background-color: $COLOR_BASE;
    border-radius: 0 0 5px 5px;
  }

  &__button {
    margin-top: 5px;
    display: flex;
    align-items: center;

    button {
      &:not(:first-of-type) {
        margin-left: 5px;
      }
    }
  }
}
</style>
