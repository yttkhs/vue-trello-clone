<template>
  <div class="ModalEditCard">
    <div class="ModalEditCard__modal">
      <header class="ModalEditCard__header">
        <h2 class="ModalEditCard__title">カードを編集する</h2>
        <ButtonCloseModalEditCard />
      </header>
      <div class="ModalEditCard__form">
        <form @submit.prevent="">
          <label>
            <input type="text" v-model="text" />
          </label>
        </form>
      </div>
      <div class="ModalEditCard__button">
        <ButtonCardEditComplete />
        <ButtonCardDelete />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonCardEditComplete from "./button/ButtonCardEditComplete";
import ButtonCardDelete from "./button/ButtonCardDelete";
import ButtonCloseModalEditCard from "./button/ButtonCloseModalEditCard";
export default {
  name: "ModalEditCard",
  components: {
    ButtonCloseModalEditCard,
    ButtonCardDelete,
    ButtonCardEditComplete
  },
  data() {
    return {
      text: ""
    };
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

  &__modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
  }

  &__header {
    height: 40px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #444;
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
