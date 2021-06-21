<template>
  <div class="h-text">
    <h2 class="title">{{ title }}</h2>
    <p class="text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "Htwoandtext",

  props: {
    title: { type: String, required: true },
    text: { type: String, required: true },
  },
};
</script>

<style lang="scss" scoped>
.h-text {
  padding: 0 120px 56px 120px;
  width: 70vw;
  .title {
    color: $olive;
    margin-bottom: 16px;
  }
  .text {
    font-weight: 300;
  }
}
</style>
