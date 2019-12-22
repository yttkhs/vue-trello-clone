<template>
  <div
    class="ModalEditList"
    @click.self="closeModalEditList"
    v-show="modalListExist"
  >
    <div class="ModalEditList__modal">
      <header class="ModalEditList__header">
        <h2 class="ModalEditList__title">リストを編集する</h2>
        <ButtonCloseModalEditList @close="closeModalEditList" />
      </header>
      <div class="ModalEditList__form">
        <form @submit.prevent="reflectionNewListData">
          <label>
            <input type="text" ref="listName" v-model="listName" />
          </label>
        </form>
      </div>
      <div class="ModalEditList__button">
        <ButtonListEditComplete
          @complete="reflectionNewListData"
          :class="{ 'no-input': !confirmInputValue }"
        />
        <ButtonListDelete @delete="deleteListData" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonListEditComplete from "./button/ButtonListEditComplete";
import ButtonListDelete from "./button/ButtonListDelete";
import ButtonCloseModalEditList from "./button/ButtonCloseModalEditList";
import { mapMutations, mapState } from "vuex";
import normalizeObj from "../../lib/normalizeObj";

export default {
  name: "ModalEditList",
  components: {
    ButtonCloseModalEditList,
    ButtonListDelete,
    ButtonListEditComplete
  },
  data() {
    return {
      listName: ""
    };
  },
  computed: {
    ...mapState({
      appData: state => state.vueTrelloClone["vue-trello-clone"],
      curBoard: state => state.curBoard.number,
      modalListExist: state => state.modalEditList.modal,
      listData: state => state.modalEditList.data
    }),
    confirmInputValue() {
      return this.listName.length > 0;
    }
  },
  methods: {
    ...mapMutations(["toggleListModal", "setData"]),
    reflectionNewListData() {
      if (this.confirmInputValue) {
        this.setNewListData();
        this.closeModalEditList();
      } else {
        alert("リストの名前を入力してください");
      }
    },
    setNewListData() {
      const data = normalizeObj(this.appData);
      const x = this.curBoard;
      const y = this.listData.id;
      data.board[x].list[y].name = this.listName;
      this.setData(data);
    },
    deleteListData() {
      const data = normalizeObj(this.appData);
      const x = this.curBoard;
      const y = this.listData.id;
      data.board[x].list.splice(y, 1);
      this.setData(data);
      this.assignmentListId();
      this.closeModalEditList();
    },
    assignmentListId() {
      const data = normalizeObj(this.appData);
      const x = this.curBoard;
      const newListsData = data.board[x].list.map((list, index) => ({
        id: index,
        name: list.name,
        card: list.card
      }));
      data.board[x].list.splice(0);
      data.board[x].list = newListsData;
      this.setData(data);
    },
    closeModalEditList() {
      this.toggleListModal(false);
    }
  },
  watch: {
    modalListExist(value) {
      this.$nextTick(() => {
        if (value) this.$refs.listName.focus();
      });
      if (value) this.listName = this.listData.name;
    }
  }
};
</script>

<style scoped lang="scss">
.ModalEditList {
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
