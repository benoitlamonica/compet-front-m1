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
@media screen and (max-width: 768px) {
  .h-text {
    padding: 0 14px;
    width: 100%;
    .title {
      font-size: 24px;
      line-height: 28px;
      margin-bottom: 24px;
    }
    .text {
      font-size: 18px;
      line-height: 28px;
      margin-bottom: 32px;
    }
  }
}
</style>
