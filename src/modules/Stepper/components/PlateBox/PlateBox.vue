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
      base_url: "https://compet-back.herokuapp.com/images/plate/",
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
        this.urlImg != undefined
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
  margin: 10px 0;
  background-color: rgba($bistre, 0.1);
  width: 100%;
  padding: $padding;
  border-radius: $radius;
  @media (max-width: 1160px) {
  }
  @media (max-width: 900px) {
  }
  @media (max-width: 500px) {
    margin: 5px 0;
  }
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
  //   COUP DE COEUR -----------------------------
  &:nth-child(1) {
    position: relative;
    border-top-left-radius: 200px;
    border-top-right-radius: 200px;
    min-height: 400px;
    max-width: 400px;
    margin: 32px auto;
    grid-row: 1/3;
    @media (max-width: 1160px) {
      margin: 10px auto;
      width: 100%;
      grid-column: 1/3;
    }
    @media (max-width: 500px) {
      max-width: none;
      height: 200px;
    }
    padding: $padding;
    &::before {
      content: "";
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: url("../../../../assets/img/cdc.svg");
      background-size: contain;
      background-position: center;
      height: 50px;
      width: 175px;
      position: absolute;
      top: 45px;
      left: -60px;
      @media (max-width: 500px) {
        top: 10px;
        left: 0px;
      }
    }
    .platebox-img {
      height: 86%;
      width: 100%;
      border-radius: $radius;
      border-top-left-radius: 200px;
      border-top-right-radius: 200px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
    .platebox-label {
      left: $padding;
    }
  }
  //   COUP DE COEUR -----------------------------
}
</style>
