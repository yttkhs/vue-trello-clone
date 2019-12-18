<template>
  <div
    class="ModalNewBoard"
    @click.self="closeModalNewBoard"
    v-show="modalNewBoard"
  >
    <div class="ModalNewBoard__modal">
      <header class="ModalNewBoard__header">
        <h1 class="ModalNewBoard__title">新規ボードの作成</h1>
        <ButtonCloseNewBoardModal @close="closeModalNewBoard" />
      </header>
      <form @submit.prevent="addNewBoard" class="ModalNewBoard__form">
        <label>
          <span class="ModalNewBoard__description">
            ボードの名前を入力してください
          </span>
          <input type="text" ref="name" v-model="name" />
        </label>
      </form>
      <ButtonAddNewBoard
        :class="{ 'no-input': !confirmInputName }"
        @clickButton="addNewBoard"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import normalizeObj from "../../lib/normalizeObj";
import ButtonAddNewBoard from "./button/ButtonAddNewBoard";
import ButtonCloseNewBoardModal from "./button/ButtonCloseNewBoardModal";

export default {
  name: "ModalNewBoard",
  components: { ButtonCloseNewBoardModal, ButtonAddNewBoard },
  data() {
    return {
      name: ""
    };
  },
  computed: {
    ...mapState({
      appData: state => state.vueTrelloClone["vue-trello-clone"],
      modalNewBoard: state => state.modalNewBoard.modal
    }),
    confirmInputName() {
      return this.name.length > 0;
    }
  },
  methods: {
    ...mapMutations(["toggleModalNewBoard", "setData", "changeBoard"]),
    closeModalNewBoard() {
      this.toggleModalNewBoard(false);
      this.resetInputValue();
    },
    addNewBoard() {
      if (this.confirmInputName) {
        this.readyToAddANewBoard();
        this.closeModalNewBoard();
        this.resetInputValue();
      } else {
        alert("ボードの名前を入力してください");
      }
    },
    readyToAddANewBoard() {
      if (this.appData.board) {
        this.setNewBoardToData();
      } else {
        this.setTheFirstBoardToTheData();
      }
    },
    setNewBoardToData() {
      const rawData = normalizeObj(this.appData);
      const boardNum = this.appData.board.length;
      rawData.board[boardNum] = {
        id: boardNum,
        name: this.name,
        current: false
      };
      this.setData(rawData);
    },
    setTheFirstBoardToTheData() {
      const initialData = {
        board: [{ id: 0, name: this.name, current: true }]
      };
      this.setData(initialData);
      this.changeBoard(0);
    },
    focusInput(elm) {
      elm.focus();
    },
    resetInputValue() {
      this.name = "";
    }
  },
  watch: {
    newBoardModal(val) {
      if (val) this.focusInput(this.$refs.name);
    }
  }
};
</script>

<style scoped lang="scss">
.ModalNewBoard {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(#000, 0.5);

  &__modal {
    width: $MODAL_WIDTH;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
    font-size: 14px;
    color: #fff;
  }

  &__form {
    padding: 10px;
    background-color: $COLOR_BASE;
    border-radius: 0 0 5px 5px;

    input {
      width: 100%;
    }
  }

  &__description {
    display: block;
    font-size: 12px;
    margin-bottom: 10px;
    color: #222;
  }
}
</style>
