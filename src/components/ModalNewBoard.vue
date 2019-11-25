<template>
  <div class="modal-new-board" v-show="newBoardModal" @click.self="closeNewBoardModal">
    <div class="modal-new-board--modal">
      <header class="modal-new-board--modal--header">
        <h1 class="modal-new-board--modal--header-title">
          新規ボードの作成
        </h1>
        <button
          class="button-close-new-board-modal"
          @click="closeNewBoardModal"
        >
          <font-awesome-icon :icon="['fas', 'times-circle']" />
        </button>
      </header>
      <form class="modal-new-board--modal--form">
        <label>
          <span class="modal-new-board--modal--form-description">
            ボードの名前を入力してください
          </span>
          <input type="text" v-model="name" />
        </label>
      </form>
      <button class="button-add-new-board">
        <font-awesome-icon :icon="['fas', 'plus-circle']" />作成する
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalNewBoard",
  data() {
    return {
      name: ""
    };
  },
  computed: {
    newBoardModal() {
      return this.$store.state.newBoardModal.modal;
    }
  },
  methods: {
    closeNewBoardModal() {
      this.$store.commit("toggle", false);
    }
  }
};
</script>

<style scoped lang="scss">
.modal-new-board {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(#000, 0.8);

  &--modal {
    width: 350px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &--header {
      height: 40px;
      padding: 0 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #444;
      border-radius: 5px 5px 0 0;

      &-title {
        font-size: 14px;
        color: #fff;
      }
    }

    &--form {
      padding: 10px;
      background-color: #999;
      border-radius: 0 0 5px 5px;

      &-description {
        display: block;
        font-size: 12px;
        margin-bottom: 10px;
        color: #222;
      }

      input {
        width: 100%;
      }
    }
  }
}

.button-close-new-board-modal {
  background-color: #444;
  color: #fff;
  font-size: 18px;
  transition: color ease-out 0.3s;

  &:hover {
    color: $COLOR_RED;
  }
}

.button-add-new-board {
  margin-top: 10px;
  width: 100px;
  border-radius: 2.5px;
  height: 30px;
  font-size: 14px;
  line-height: 30px;
  background-color: $COLOR_GREEN;
  color: #fff;

  &.no-input {
    cursor: not-allowed;
    background-color: lighten($COLOR_GREEN, 20%);
  }

  svg {
    margin-right: 5px;
  }
}
</style>
