<template>
  <div class="block-add-list">
    <button @click="addNewList">リストを追加する</button>
    <form class="block-add-list--form">
      <label>
        <input type="text" />
      </label>
      <div>
        <button>リストを追加</button>
        <button>
          <font-awesome-icon :icon="['fas', 'times-circle']" />
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ButtonAddList",
  methods: {
    addNewList() {}
  }
};
</script>

<style scoped lang="scss">
.button--add-list {}
</style>
