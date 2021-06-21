<template>
  <div
    :class="[
      loadMode ? 'ing-box-content load' : 'ing-box-content',
      disabled ? 'disable' : '',
    ]"
  >
    <div
      class="ing-box-img"
      :style="
        !loadMode
          ? url_img
            ? `background-image : url(${base_url + url_img})`
            : `background-image : url(${no_img_url})`
          : ''
      "
    ></div>
    <div class="ing-box-label">{{ label }}</div>
  </div>
</template>

<script>
export default {
  name: "IngBox",
  data() {
    return {
      base_url: "http://127.0.0.1:8000/images/ing/",
      no_img_url:
        "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",
    };
  },
  props: {
    label: {
      type: String,
      required: false,
      default: "Loading...",
    },
    url_img: {
      type: String,
      required: false,
    },
    loadMode: {
      type: Boolean,
      required: false,
      default: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
$padding: 15px;
$margin: 35px 0;
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
  }
  &:hover {
    transform: scale(1.1);
  }
  .ing-box-label {
    margin-top: $padding;
    color: $olive;
    font-family: $ff-butler;
    font-size: 18px;
  }
  .ing-box-img {
    height: 150px;
    background-color: rgba(grey, 0.2);
    background-size: cover;
    background-position: center;
  }
}
.load {
  .ing-box-img {
    background-color: rgba(grey, 0.2);
    background-image: none;
  }
  pointer-events: none;
  animation: loading 1s infinite;
  .ing-box-label {
    color: grey;
  }
  background-color: rgba(grey, 0.1);
}
.disable {
  background-color: rgba($bistre, 0.3);
  border: 0.5px solid $olive;
}
</style>
