<template>
  <div class="BaseList">
    <h3 class="BaseList__head">
      <span class="BaseList__name">{{ this.name }}</span>
      <ButtonOpenModalEditList @open="openModalEditList" />
    </h3>
    <draggable
      v-model="cardsData"
      v-if="cards.length"
      @end="endDrag"
      tag="ul"
      class="BaseList__items"
    >
      <li class="BaseList__item" v-for="card in cards" :key="card.id">
        <BaseCard :name="card.name" :id="card.id" :listId="id" />
      </li>
    </draggable>
    <BlockAddCard :id="this.id" />
  </div>
</template>

<script>
import BlockAddCard from "./BlockAddCard";
import BaseCard from "./BaseCard";
import ButtonOpenModalEditList from "./button/ButtonOpenModalEditList";
import draggable from "vuedraggable";
import normalizeObj from "../../lib/normalizeObj";
import { mapState } from "vuex";

export default {
  name: "BaseList",
  components: { ButtonOpenModalEditList, BaseCard, BlockAddCard, draggable },
  props: ["name", "cards", "id"],
  data() {
    return {
      cardsData: null
    };
  },
  created() {
    this.cardsData = this.curListCardsData;
  },
  computed: {
    ...mapState({
      curBoardNum: state => state.curBoard.number,
      appData: state => state.vueTrelloClone["vue-trello-clone"]
    }),
    curListCardsData() {
      return this.appData.board[this.curBoardNum].list[this.id].card;
    }
  },
  methods: {
    openModalEditList() {
      this.$store.commit("toggleListModal", true);
      this.$store.commit("setListData", { id: this.id, name: this.name });
    },
    endDrag() {
      const data = normalizeObj(this.appData);
      const x = this.curBoardNum;
      const y = this.id;
      data.board[x].list[y].card.splice(0);
      data.board[x].list[y].card = this.cardsData;
      this.$store.commit("setData", data);
      this.assignCardId();
    },
    assignCardId() {
      const data = normalizeObj(this.appData);
      const x = this.curBoardNum;
      const y = this.id;
      const newCardsData = data.board[x].list[y].card.map((card, index) => ({
        id: index,
        name: card.name
      }));
      data.board[x].list[y].card.splice(0);
      data.board[x].list[y].card = newCardsData;
      this.$store.commit("setData", data);
    }
  },
  watch: {
    curListCardsData() {
      this.cardsData = this.curListCardsData;
    }
  }
};
</script>

<style scoped lang="scss">
.BaseList {
  width: $BASE_LIST_WIDTH;
  background-color: $COLOR_BASE;
  padding: 15px 10px 10px;
  border-radius: 5px;

  &:not(:first-of-type) {
    margin-left: 10px;
  }

  &__head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
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

  &__items {
    width: 100%;
  }

  &__item {
    &:last-of-type {
      margin-bottom: 10px;
    }

    &:not(:last-of-type) {
      margin-bottom: 5px;
    }
  }
}
</style>
