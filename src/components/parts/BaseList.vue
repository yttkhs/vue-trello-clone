<template>
  <div class="base-list">
    <h3 class="base-list--name">{{ this.name }}</h3>
    <ul v-if="cards" class="base-list--items">
      <li class="base-list--item" v-for="card in cards" :key="card.id">
        <BaseCard :name="card.name" :id="card.id" :listId="id" />
      </li>
    </ul>
    <BlockAddCard :id="this.id" />
  </div>
</template>

<script>
import BlockAddCard from "./BlockAddCard";
import BaseCard from "./BaseCard";
export default {
  name: "BaseList",
  components: { BaseCard, BlockAddCard },
  props: ["name", "cards", "id"],
  computed: {}
};
</script>

<style scoped lang="scss">
.base-list {
  width: $BASE_LIST_WIDTH;
  background-color: $COLOR_BASE;
  padding: 15px 10px 10px;
  border-radius: 5px;

  &:not(:first-of-type) {
    margin-left: 10px;
  }

  &--name {
    font-size: 14px;
    line-height: 100%;
    color: $COLOR_TEXT;
  }

  &--items {
    width: 100%;
    margin-top: 15px;
  }

  &--item {
    &:last-of-type {
      margin-bottom: 10px;
    }

    &:not(:last-of-type) {
      margin-bottom: 5px;
    }
  }
}
</style>
