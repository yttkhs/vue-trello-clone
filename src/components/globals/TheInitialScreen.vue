<template>
  <div class="TheInitialScreen">
    <section class="TheInitialScreen__container">
      <h2 class="TheInitialScreen__head">新規ボードを作成してください</h2>
      <ButtonInitialAddNewBoard @open="openModalNewBoard" />
    </section>
  </div>
</template>

<script>
import ButtonInitialAddNewBoard from "../parts/button/ButtonInitialAddNewBoard";
export default {
  name: "InitialScreen",
  components: { ButtonInitialAddNewBoard },
  methods: {
    openModalNewBoard() {
      this.$store.commit("toggleModalNewBoard", true);
    }
  }
};
</script>

<style scoped lang="scss">
.TheInitialScreen {
  position: relative;
  height: calc(100vh - 50px);

  &__container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__head {
    font-size: 20px;
    color: $COLOR_TEXT;
    font-weight: bold;
  }
}
</style>
