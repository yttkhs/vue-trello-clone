<template>
  <div class="base-list">
    <h3 class="base-list--name">{{ this.name }}</h3>
    <ul v-if="cards" class="base-list--items">
      <li v-for="card in this.cards" :key="card.id">{{ card.name }}</li>
    </ul>
    <BlockAddCard :id="this.id" />
  </div>
</template>

<script>
import BlockAddCard from "./BlockAddCard";
export default {
  name: "BaseList",
  components: { BlockAddCard },
  props: ["name", "cards", "id"],
  computed: {}
};
</script>

<style scoped lang="scss">
.base-list {
  width: $BASE_LIST_WIDTH;
  background-color: #ddd;
  padding: 10px;
  border-radius: 5px;

  &:not(:first-of-type) {
    margin-left: 10px;
  }

  &--name {
    font-size: 14px;
    line-height: 30px;
    color: #555;
    margin-bottom: 5px;
  }

  &--items {
    width: 100%;
  }
}
</style>
