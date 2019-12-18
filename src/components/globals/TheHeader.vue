<template>
  <header class="TheHeader">
    <h1 class="TheHeader__title">
      <font-awesome-icon :icon="['fab', 'trello']" />VUE TRELLO CLONE
    </h1>
    <div class="TheHeader__nav">
      <ButtonOpenNewBoardModal @open="openModalNewBoard" />
      <ButtonOpenBoardList @open="openModalBoardList" />
    </div>
  </header>
</template>

<script>
import ButtonOpenNewBoardModal from "../parts/button/ButtonOpenNewBoardModal";
import ButtonOpenBoardList from "../parts/button/ButtonOpenBoardList";
export default {
  name: "TheHeader",
  components: { ButtonOpenBoardList, ButtonOpenNewBoardModal },
  data() {
    return {};
  },
  methods: {
    openModalNewBoard() {
      this.$store.commit("toggleModalNewBoard", true);
    },
    openModalBoardList() {
      this.$store.commit("toggleModalBoardList", true);
    }
  }
};
</script>

<style scoped lang="scss">
.TheHeader {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $COLOR_BASE;
  padding: 0 20px;

  &__title {
    color: #555;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 0.1em;
    font-weight: bold;

    svg {
      font-size: 20px;
      margin-right: 15px;
    }
  }

  &__nav {
    display: flex;
  }
}
</style>
