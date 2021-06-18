<template>
  <button class="button">
    <router-link v-if="isRouter" :to="link"
      ><a :aria-label="ariaLabel">{{ text }}</a></router-link
    >
    <a v-else :href="link" :aria-label="ariaLabel">{{ text }}</a>
  </button>
</template>

<script>
export default {
  name: "Button",

  props: {
    text: { type: String, required: true },
    ariaLabel: { type: String, required: true },
    link: { type: String, required: false, default: "#" },
    isRouter: { type: Boolean, required: true },
  },
};
</script>

<style>
.button {
  color: white;
}
</style>
