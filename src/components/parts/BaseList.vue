<template>
  <div class="BaseList">
    <h3 class="BaseList__head">
      <span class="BaseList__name">{{ this.name }}</span>
      <ButtonOpenModalEditList @open="openModalEditList" />
    </h3>
    <ul v-if="cards" class="BaseList__items">
      <li class="BaseList__item" v-for="card in cards" :key="card.id">
        <BaseCard :name="card.name" :id="card.id" :listId="id" />
      </li>
    </ul>
    <BlockAddCard :id="this.id" />
  </div>
</template>

<script>
import BlockAddCard from "./BlockAddCard";
import BaseCard from "./BaseCard";
import ButtonOpenModalEditList from "./button/ButtonOpenModalEditList";
export default {
  name: "BaseList",
  components: { ButtonOpenModalEditList, BaseCard, BlockAddCard },
  props: ["name", "cards", "id"],
  methods: {
    openModalEditList() {
      this.$store.commit("toggleListModal", true);
      this.$store.commit("setListData", { id: this.id, name: this.name });
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
    margin-top: 15px;
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
