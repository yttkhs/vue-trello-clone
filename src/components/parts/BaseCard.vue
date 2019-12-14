<template>
  <div class="BaseCard">
    <span class="BaseCard__name">{{ name }}</span>
    <ButtonOpenModalEditCard />
  </div>
</template>

<script>
import ButtonOpenModalEditCard from "./button/ButtonOpenModalEditCard";
export default {
  name: "BaseCard",
  components: { ButtonOpenModalEditCard },
  props: {
    name: String
  }
};
</script>

<style scoped lang="scss">
.BaseCard {
  width: 100%;
  padding: 10px;
  background-color: $COLOR_WHITE;
  color: $COLOR_TEXT;
  border-radius: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
