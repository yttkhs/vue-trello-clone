<template>
  <header class="header">
    <h1 class="header--title">
      <font-awesome-icon
        :icon="['fab', 'trello']"
        class="header--title--icon"
      />VUE TRELLO CLONE
    </h1>
    <div class="header--nav">
      <ButtonOpenNewBoardModal @open="openNewBoardModal" />
      <ButtonOpenBoardList />
    </div>
  </header>
</template>

<script>
import ButtonOpenNewBoardModal from "./ButtonOpenNewBoardModal";
import ButtonOpenBoardList from "./ButtonOpenBoardList";
export default {
  name: "TheHeader",
  components: { ButtonOpenBoardList, ButtonOpenNewBoardModal },
  data() {
    return {};
  },
  methods: {
    openNewBoardModal() {
      this.$store.commit("toggleModal", true);
    }
  }
};
</script>

<style scoped lang="scss">
.header {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $COLOR_BASE;
  padding: 0 20px;

  &--title {
    color: #555;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 0.1em;
    font-weight: bold;

    &--icon {
      font-size: 20px;
      margin-right: 15px;
    }
  }
}
</style>
