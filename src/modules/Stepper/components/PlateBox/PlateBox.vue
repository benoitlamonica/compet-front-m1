<template>
  <div class="platebox-content">
    <div class="platebox-img" :style="bImage"></div>
    <div class="platebox-label">{{ label }}</div>
  </div>
</template>

<script>
export default {
  name: "PlateBox",
  data() {
    return {
      base_url: "http://127.0.0.1:8000/images/plate/",
      noImgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",
    };
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    urlImg: {
      type: String,
      required: false,
    },
  },
  computed: {
    bImage() {
      let bImage =
        this.urlImg || this.urlImg != undefined
          ? `background-image : url(${this.base_url + this.urlImg})`
          : `background-image : url(${this.noImgUrl})`;
      console.log(bImage);
      return bImage;
    },
  },
};
</script>

<style lang="scss" scoped>
$radius: 8px;
$padding: 17px;
.platebox-content {
  margin: 35px 0;
  background-color: rgba($bistre, 0.1);
  width: 100%;
  padding: $padding;
  border-radius: $radius;
  .platebox-img {
    height: 150px;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-color: rgba(grey, 0.1);
  }
  .platebox-label {
    font-family: $ff-butler;
    color: $olive;
    font-size: 18px;
    margin-top: $padding;
  }
  //   COUP DE COEUR
  &:nth-child(1) {
    background-color: transparent;
    position: relative;
    height: 400px;
    grid-row: 1/3;
    padding: 0;
    &::after {
      content: "♥️ Coup de coeur";
      color: $albatre;
      border-radius: 4px;
      font-weight: 300;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: $padding;
      position: absolute;
      bottom: 86px;
      left: -70px;
      background-color: $bistre;
    }
    .platebox-img {
      height: 100%;
      width: 100%;
      border-radius: $radius;
      border-top-left-radius: 200px;
      border-top-right-radius: 200px;
      background-size: cover;
      background-position: center;
      background-color: rgba(grey, 0.1);
    }
    .platebox-label {
      position: absolute;
      bottom: 10px;
      left: $padding;
    }
  }
}
</style>
