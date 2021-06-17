<template>
  <div id="app">
    <p>Hello</p>
    <img :src="img" alt="" />
  </div>
</template>

<script>
import img from "./assets/logo.png";
export default {
  name: "App",
  data() {
    return {
      img: img,
    };
  },
};
</script>

<style></style>
