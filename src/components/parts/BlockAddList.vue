<template>
  <div class="block-add-list">
    <ButtonOpenAddNewListForm v-show="!formOpen" @open="openNewListForm" />
    <div v-show="formOpen" class="block-add-list--form">
      <form @submit.prevent="addNewList">
        <label>
          <input
            type="text"
            v-model="listName"
            placeholder="リストの名前を入力してください"
          />
        </label>
      </form>
      <div class="block-add-list--form-button">
        <ButtonAddNewList
          :class="{ 'no-input': !confirmInputName }"
          @add="addNewList"
        />
        <button @click="closeNewListForm" class="button-add-new-list-cancel">
          <font-awesome-icon :icon="['fas', 'times-circle']" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import normalizeObj from "../../lib/normalizeObj";
import ButtonOpenAddNewListForm from "./button/ButtonOpenAddNewListForm";
import ButtonAddNewList from "./button/ButtonAddNewList";

export default {
  name: "ButtonAddList",
  components: { ButtonAddNewList, ButtonOpenAddNewListForm },
  data() {
    return {
      formOpen: false,
      listName: ""
    };
  },
  computed: {
    ...mapState({
      currentBoard: state => state.currentBoard.number,
      vueTrelloCloneData: state => state.vueTrelloClone["vue-trello-clone"]
    }),
    confirmInputName() {
      return this.listName.length > 0;
    },
    currentBoardData() {
      return this.vueTrelloCloneData.board[this.currentBoard];
    }
  },
  methods: {
    ...mapMutations(["setData"]),
    addNewList() {
      if (this.confirmInputName) {
        this.readyToAddNewList();
        this.resetInputValue();
        this.closeNewListForm();
      } else {
        alert("リストの名前を入力してください");
      }
    },
    readyToAddNewList() {
      if (this.currentBoardData.list) {
        this.setNewListToData();
      } else {
        this.setTheFirstListToData();
      }
    },
    setNewListToData() {
      const rawData = normalizeObj(this.vueTrelloCloneData);
      const listNum = this.vueTrelloCloneData.board[this.currentBoard].list
        .length;
      rawData.board[this.currentBoard].list[listNum] = {
        id: listNum,
        name: this.listName,
        card: []
      };
      this.setData(rawData);
    },
    setTheFirstListToData() {
      const initialData = { id: 0, name: this.listName, card: [] };
      const rawData = normalizeObj(this.vueTrelloCloneData);
      rawData.board[this.currentBoard].list = [initialData];
      this.setData(rawData);
    },
    openNewListForm() {
      this.formOpen = true;
    },
    closeNewListForm() {
      this.formOpen = false;
      this.resetInputValue();
    },
    resetInputValue() {
      this.listName = "";
    }
  }
};
</script>

<style scoped lang="scss">
.block-add-list {
  width: $BASE_LIST_WIDTH;
  border-radius: 5px;
  background-color: $COLOR_BASE;
  flex: none;

  &--form {
    padding: 10px;

    &-button {
      margin-top: 10px;
      display: flex;
    }
  }
}

.button-add-new-list-cancel {
  border-radius: 5px;
  width: 30px;
  height: 30px;
  background-color: $COLOR_BUTTON;
  font-size: 14px;
  color: #fff;
  margin-left: 5px;
}
</style>
