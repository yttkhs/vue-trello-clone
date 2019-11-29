<template>
  <header class="header">
    <h1 class="header--title">
      <font-awesome-icon
        :icon="['fab', 'trello']"
        class="header--title--icon"
      />VUE TRELLO CLONE
    </h1>
    <div class="header--nav">
      <button class="button-add-board" @click="openNewBoardModal">
        <font-awesome-icon :icon="['fas', 'plus-circle']" />
      </button>
      <button class="button-open-board-list">
        <font-awesome-icon
          :icon="['fas', 'th-list']"
          class="button-open-board-list--icon"
        />ボードリスト
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
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
  background-color: #ddd;
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

button[class^="button"] {
  border-radius: 5px;
  font-size: 14px;
  height: 30px;
  line-height: 30px;
  background-color: #777;
  color: #fff;
}

.button-add-board {
  width: 30px;
  transition: color ease-out 0.3s;

  &:hover {
    color: $COLOR_GREEN;
  }
}

.button-open-board-list {
  width: 130px;
  color: #fff;
  margin-left: 5px;

  &--icon {
    margin-right: 10px;
  }
}
</style>
