<template>
  <button class="button">
    <a class="link" href="https://persiletromarin.fr/">{{text}}</a>
  </button>
</template>

<script>
export default {
  name: "Button",

  props:{
    text : {type:String, required:true}
  }
};
</script>

<style>
.button {
  color: white;
}
</style>