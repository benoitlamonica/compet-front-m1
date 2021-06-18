<template>
  <div class="step-container">
    <div class="number">{{ number }}</div>
    <div class="text-infos">
      <h3 class="title">{{ title }}</h3>
      <div class="text">{{ text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Steps",

  props: {
    text: { type: String, required: true },
    title: { type: String, required: true },
    number: { type: String, required: true },
  },
};
</script>

<style lang="scss" scoped>
.step-container {
  display: flex;
  width: 100%;
  .title {
    color: $bistre;
  }
  .text {
    font-size: 16px;
  }
}
</style>
