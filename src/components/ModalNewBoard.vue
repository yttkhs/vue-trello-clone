<template>
  <div
    class="modal-new-board"
    v-show="newBoardModal"
    @click.self="closeNewBoardModal"
  >
    <div class="modal-new-board--modal">
      <header class="modal-new-board--modal--header">
        <h1 class="modal-new-board--modal--header-title">
          新規ボードの作成
        </h1>
        <button
          class="button-close-new-board-modal"
          @click="closeNewBoardModal"
        >
          <font-awesome-icon :icon="['fas', 'times-circle']" />
        </button>
      </header>
      <form
        @submit.prevent="clickAddNewBoardButton"
        class="modal-new-board--modal--form"
      >
        <label>
          <span class="modal-new-board--modal--form-description">
            ボードの名前を入力してください
          </span>
          <input type="text" ref="name" v-model="name" />
        </label>
      </form>
      <ButtonAdd
        :class="{ 'no-input': !confirmInputName }"
        @click="clickAddNewBoardButton"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import normalizeObj from "../lib/normalizeObj";
import ButtonAdd from "./ButtonAdd";

export default {
  name: "ModalNewBoard",
  components: { ButtonAdd },
  data() {
    return {
      name: ""
    };
  },
  computed: {
    ...mapState({
      vueTrelloCloneData: state => state.vueTrelloClone["vue-trello-clone"],
      newBoardModal: state => state.newBoardModal.modal
    }),
    confirmInputName() {
      return this.name.length > 0;
    }
  },
  methods: {
    ...mapMutations(["toggleModal", "setData", "changeNumber"]),
    closeNewBoardModal() {
      this.toggleModal(false);
      this.resetInputValue();
    },
    clickAddNewBoardButton() {
      if (this.confirmInputName) {
        this.addNewBoard();
        this.closeNewBoardModal();
        this.resetInputValue();
      } else {
        alert("ボードの名前を入力してください");
      }
    },
    addNewBoard() {
      if (this.vueTrelloCloneData.board) {
        this.setNewBoardToData();
      } else {
        this.setTheFirstBoardToTheData();
      }
    },
    setNewBoardToData() {
      const rawData = normalizeObj(this.vueTrelloCloneData);
      const boardNum = this.vueTrelloCloneData.board.length;
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
      this.changeNumber(0);
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
.modal-new-board {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(#000, 0.6);

  &--modal {
    width: 350px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &--header {
      height: 40px;
      padding: 0 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #444;
      border-radius: 5px 5px 0 0;

      &-title {
        font-size: 14px;
        color: #fff;
      }
    }

    &--form {
      padding: 10px;
      background-color: #ccc;
      border-radius: 0 0 5px 5px;

      &-description {
        display: block;
        font-size: 12px;
        margin-bottom: 10px;
        color: #222;
      }

      input {
        width: 100%;
      }
    }
  }
}

.button-close-new-board-modal {
  background-color: #444;
  color: #fff;
  font-size: 18px;
  transition: color ease-out 0.3s;

  &:hover {
    color: $COLOR_RED;
  }
}
</style>
