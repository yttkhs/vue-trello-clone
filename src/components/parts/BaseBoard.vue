<template>
  <div class="BaseBoard">
    <h2 class="BaseBoard__name">
      <font-awesome-icon :icon="['far', 'clipboard']" />
      {{ curBoardData.name }}
    </h2>
    <div class="BaseBoard__container">
      <draggable
        v-if="listExists"
        v-model="curBoardListData"
        @end="endDrag"
        class="BaseBoard__content BaseBoard__lists"
      >
        <BaseList
          v-for="list in curBoardListData"
          :cards="list.card"
          :name="list.name"
          :id="list.id"
          :key="list.id"
          class="BaseBoard__list"
        />
      </draggable>
      <BlockAddList class="BaseBoard__content" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BaseList from "./BaseList";
import BlockAddList from "./BlockAddList";
import draggable from "vuedraggable";
import normalizeObj from "../../lib/normalizeObj";

export default {
  name: "BaseBoard",
  components: { BlockAddList, BaseList, draggable },
  data() {
    return {
      curBoardListData: null
    };
  },
  created() {
    this.curBoardListData = this.curBoardData.list;
  },
  computed: {
    ...mapState({
      curBoardNum: state => state.curBoard.number,
      appData: state => state.vueTrelloClone["vue-trello-clone"]
    }),
    curBoardData() {
      return this.appData.board[this.curBoardNum];
    },
    listExists() {
      return this.curBoardData.list !== undefined;
    }
  },
  methods: {
    endDrag() {
      const data = normalizeObj(this.appData);
      const listData = normalizeObj(this.curBoardListData);
      const num = this.curBoardNum;
      data.board[num].list.splice(0);
      data.board[num].list = listData;
      this.$store.commit("setData", data);
      this.assignListId();
    },
    assignListId() {
      const data = normalizeObj(this.appData);
      const num = this.curBoardNum;
      const newListsData = data.board[num].list.map((list, index) => ({
        id: index,
        name: list.name,
        card: list.card
      }));
      data.board[num].list.splice(0);
      data.board[num].list = newListsData;
      this.$store.commit("setData", data);
    }
  },
  watch: {
    curBoardData() {
      this.curBoardListData = this.curBoardData.list;
    }
  }
};
</script>

<style scoped lang="scss">
.BaseBoard {
  padding: 10px;
  min-height: calc(100vh - 50px);
  background-color: #f7f7f7;

  &__name {
    font-size: 16px;
    color: #666;
    line-height: 30px;
    padding: 0 10px;
    letter-spacing: 0.1em;

    svg {
      margin-right: 5px;
    }
  }

  &__container {
    width: 100%;
    display: flex;
    align-items: flex-start;
    margin-top: 10px;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__content {
    flex: none;

    &:not(:first-of-type) {
      margin-left: 10px;
    }
  }

  &__lists {
    display: flex;
    align-items: flex-start;
  }

  &__list {
    flex: none;

    &:not(:first-of-type) {
      margin-left: 10px;
    }
  }
}
</style>
