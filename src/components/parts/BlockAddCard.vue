<template>
  <div class="block-add-card">
    <ButtonOpenAddNewCardForm v-show="!formOpen" @open="openNewCardForm" />
    <div v-show="formOpen" class="block-add-card--form">
      <form @submit.prevent="addNewCard">
        <label>
          <input
            type="text"
            v-model="cardName"
            placeholder="カードの名前を入力してください"
          />
        </label>
      </form>
      <div class="block-add-card--form-button">
        <ButtonAddNewCard
          :class="{ 'no-input': !confirmInputName }"
          @add="addNewCard"
        />
        <button @click="closeNewCardForm" class="button-add-new-card-cancel">
          <font-awesome-icon :icon="['fas', 'times-circle']" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonOpenAddNewCardForm from "./button/ButtonOpenAddNewCardForm";
import ButtonAddNewCard from "./button/ButtonAddNewCard";
import { mapMutations, mapState } from "vuex";
import normalizeObj from "../../lib/normalizeObj";

export default {
  name: "BlockAddCard",
  components: { ButtonAddNewCard, ButtonOpenAddNewCardForm },
  data() {
    return {
      formOpen: false,
      cardName: ""
    };
  },
  props: ["id"],
  computed: {
    ...mapState({
      currentBoard: state => state.currentBoard.number,
      vueTrelloCloneData: state => state.vueTrelloClone["vue-trello-clone"]
    }),
    confirmInputName() {
      return this.cardName.length > 0;
    },
    currentBoardData() {
      return this.vueTrelloCloneData.board[this.currentBoard];
    }
  },
  methods: {
    ...mapMutations(["setData"]),
    addNewCard() {
      if (this.confirmInputName) {
        this.readyToAddNewCard();
        this.resetInputValue();
        this.closeNewCardForm();
      } else {
        alert("カードの名前を入力してください");
      }
    },
    readyToAddNewCard() {
      if (this.currentBoardData.list[this.id].card.length) {
        this.setNewCardToData();
      } else {
        this.setTheFirstCardToData();
      }
    },
    setNewCardToData() {
      const rawData = normalizeObj(this.vueTrelloCloneData);
      const cardNum = this.vueTrelloCloneData.board[this.currentBoard].list[
        this.id
      ].card.length;
      rawData.board[this.currentBoard].list[this.id].card[cardNum] = {
        id: cardNum,
        name: this.cardName
      };
      this.setData(rawData);
    },
    setTheFirstCardToData() {
      const initialData = { id: 0, name: this.cardName };
      const rawData = normalizeObj(this.vueTrelloCloneData);
      rawData.board[this.currentBoard].list[this.id].card[0] = initialData;
      this.setData(rawData);
    },
    openNewCardForm() {
      this.formOpen = true;
    },
    closeNewCardForm() {
      this.formOpen = false;
      this.resetInputValue();
    },
    resetInputValue() {
      this.cardName = "";
    }
  }
};
</script>

<style scoped lang="scss">
.block-add-card {
  &--form {
    &-button {
      margin-top: 10px;
    }
  }
}

.button-add-new-card-cancel {
  border-radius: 5px;
  width: 30px;
  height: 30px;
  background-color: $COLOR_BUTTON;
  font-size: 14px;
  color: #fff;
  margin-left: 5px;
}
</style>
