<template>
  <div class="BlockAddList">
    <ButtonOpenAddNewListForm v-show="!formOpen" @open="openNewListForm" />
    <div v-show="formOpen" class="BlockAddList__form">
      <form @submit.prevent="addNewList">
        <label>
          <input
            type="text"
            v-model="listName"
            ref="listName"
            placeholder="リストの名前を入力してください"
          />
        </label>
      </form>
      <div class="BlockAddList__button">
        <ButtonAddNewList
          :class="{ 'no-input': !confirmInputName }"
          @add="addNewList"
        />
        <button @click="closeNewListForm" class="ButtonAddNewListCancel">
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
      curBoard: state => state.curBoard.number,
      appData: state => state.vueTrelloClone["vue-trello-clone"]
    }),
    confirmInputName() {
      return this.listName.length > 0;
    },
    curBoardData() {
      return this.appData.board[this.curBoard];
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
      if (this.curBoardData.list) {
        this.setNewListToData();
      } else {
        this.setTheFirstListToData();
      }
    },
    setNewListToData() {
      const rawData = normalizeObj(this.appData);
      const listNum = this.appData.board[this.curBoard].list.length;

      rawData.board[this.curBoard].list[listNum] = {
        id: listNum,
        name: this.listName,
        card: []
      };
      this.setData(rawData);
    },
    setTheFirstListToData() {
      const initialData = { id: 0, name: this.listName, card: [] };
      const rawData = normalizeObj(this.appData);

      rawData.board[this.curBoard].list = [initialData];
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
  },
  watch: {
    formOpen(value) {
      this.$nextTick(() => {
        if (value) this.$refs.listName.focus();
      });
    }
  }
};
</script>

<style scoped lang="scss">
.BlockAddList {
  width: $BASE_LIST_WIDTH;
  border-radius: 5px;
  background-color: $COLOR_BASE;
  flex: none;

  &__form {
    padding: 10px;
  }

  &__button {
    margin-top: 10px;
    display: flex;
  }
}

.ButtonAddNewListCancel {
  border-radius: 5px;
  width: 30px;
  height: 30px;
  background-color: $COLOR_BUTTON;
  font-size: 14px;
  color: #fff;
  margin-left: 5px;
}
</style>
