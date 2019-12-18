<template>
  <div
    class="ModalEditCard"
    @click.self="closeModalEditCard"
    v-show="modalExist"
  >
    <div class="ModalEditCard__modal">
      <header class="ModalEditCard__header">
        <h2 class="ModalEditCard__title">カードを編集する</h2>
        <ButtonCloseModalEditCard @close="closeModalEditCard" />
      </header>
      <div class="ModalEditCard__form">
        <form @submit.prevent="reflectionNewCardData">
          <label>
            <input type="text" v-model="cardName" />
          </label>
        </form>
      </div>
      <div class="ModalEditCard__button">
        <ButtonCardEditComplete
          @complete="reflectionNewCardData"
          :class="{ 'no-input': !confirmInputValue }"
        />
        <ButtonCardDelete @delete="deleteCardData" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonCardEditComplete from "./button/ButtonCardEditComplete";
import ButtonCardDelete from "./button/ButtonCardDelete";
import ButtonCloseModalEditCard from "./button/ButtonCloseModalEditCard";
import { mapMutations, mapState } from "vuex";
import normalizeObj from "../../lib/normalizeObj";

export default {
  name: "ModalEditCard",
  components: {
    ButtonCloseModalEditCard,
    ButtonCardDelete,
    ButtonCardEditComplete
  },
  data() {
    return {
      cardName: ""
    };
  },
  computed: {
    ...mapState({
      appData: state => state.vueTrelloClone["vue-trello-clone"],
      currentBoard: state => state.currentBoard.number,
      modalExist: state => state.modalEditCard.modal,
      cardData: state => state.modalEditCard.data
    }),
    confirmInputValue() {
      return this.cardName.length > 0;
    }
  },
  methods: {
    ...mapMutations(["toggleCardModal", "setData"]),
    reflectionNewCardData() {
      if (this.confirmInputValue) {
        this.setNewCardData();
        this.closeModalEditCard();
      } else {
        alert("カードの内容を入力してください");
      }
    },
    setNewCardData() {
      const data = normalizeObj(this.appData);
      const x = this.currentBoard;
      const y = this.cardData.listId;
      const z = this.cardData.id;
      data.board[x].list[y].card[z].name = this.cardName;
      this.setData(data);
    },
    deleteCardData() {
      const data = normalizeObj(this.appData);
      const x = this.currentBoard;
      const y = this.cardData.listId;
      const z = this.cardData.id;
      data.board[x].list[y].card.splice(z, 1);
      this.setData(data);
      this.assignmentCardId();
      this.closeModalEditCard();
    },
    assignmentCardId() {
      const data = normalizeObj(this.appData);
      const x = this.currentBoard;
      const y = this.cardData.listId;
      const newCardsData = data.board[x].list[y].card.map((card, index) => ({
        id: index,
        name: card.name
      }));
      data.board[x].list[y].card.splice(0);
      data.board[x].list[y].card = newCardsData;
      this.setData(data);
    },
    closeModalEditCard() {
      this.toggleCardModal(false);
    }
  },
  watch: {
    modalExist(value) {
      if (value) this.cardName = this.cardData.name;
    }
  }
};
</script>

<style scoped lang="scss">
.ModalEditCard {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(#000, 0.5);
  z-index: 1;

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
