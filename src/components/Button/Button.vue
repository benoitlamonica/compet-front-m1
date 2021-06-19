<template>
  <button class="button">
    <a class="link" :href="link" :aria-label="ariaLabel">{{ text }}</a>
  </button>
</template>

<script>
export default {
  name: "Button",

  props: {
    text: { type: String, required: true },
    link: { type: URL, required: true },
    ariaLabel: { type: String, required: true },
  },
};
</script>

<style>
.button {
  color: white;
}
</style>