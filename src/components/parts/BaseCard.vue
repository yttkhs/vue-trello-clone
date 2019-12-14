<template>
  <div class="BaseCard">
    <span class="BaseCard__name">{{ name }}</span>
    <ButtonOpenModalEditCard @open="openModalEditCard" />
  </div>
</template>

<script>
import ButtonOpenModalEditCard from "./button/ButtonOpenModalEditCard";
export default {
  name: "BaseCard",
  components: { ButtonOpenModalEditCard },
  props: {
    id: undefined,
    listId: Number,
    name: String
  },
  methods: {
    openModalEditCard() {
      this.$store.commit("toggleCardModal", true);
      this.$store.commit("setCardData", {
        id: this.id,
        listId: this.listId,
        name: this.name
      });
    }
  }
};
</script>

<style scoped lang="scss">
.BaseCard {
  width: 100%;
  padding: 7.5px 5px 7.5px 10px;
  background-color: $COLOR_WHITE;
  border-radius: 5px;
  display: flex;

  &__name {
    flex: 1;
    color: $COLOR_TEXT;
    line-height: 25px;
    font-size: 14px;
    letter-spacing: 0.01em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
