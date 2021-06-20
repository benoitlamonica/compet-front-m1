<template>
  <div :class="loadMode ? 'ing-box-content load' : 'ing-box-content'">
    <div class="ing-box-img"></div>
    <div class="ing-box-label">{{ label }}</div>
  </div>
</template>

<script>
export default {
  name: "IngBox",
  props: {
    label: {
      type: String,
      required: false,
      default: "Loading...",
    },
    loadMode: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
$padding: 20px;
$margin: 55px 0 35px;
$radius: 8px;
$width: 100%;

.ing-box-content {
  cursor: pointer;
  width: $width;
  border-radius: $radius;
  margin: $margin;
  padding: $padding;
  background-color: rgba($bistre, 0.1);
  transition: ease 0.1s;
  &:active {
    opacity: 0.5;
    transform: scale(0.8);
  }
  .ing-box-label {
    margin-top: 10px;
    color: $olive;
    font-family: $ff-butler;
    font-size: 18px;
  }
  .ing-box-img {
    height: 150px;
    background-color: rgba(grey, 0.2);
  }
}
.load {
  * {
    color: grey;
    animation: loading 1s infinite;
  }
  background-color: rgba(grey, 0.1);
}
</style>
