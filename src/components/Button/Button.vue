<template>
  <button class="button">
<<<<<<< HEAD
    <a class="link" :href="link" :aria-label="ariaLabel">{{ text }}</a>
=======
    <router-link :to="link">{{ text }}</router-link>
>>>>>>> 495d84a (Routes)
  </button>
</template>

<script>
export default {
  name: "Button",

  props: {
    text: { type: String, required: true },
<<<<<<< HEAD
    link: { type: URL, required: true },
    ariaLabel: { type: String, required: true },
=======
    link: { type: String, required: false },
>>>>>>> 495d84a (Routes)
  },
};
</script>

<style>
.button {
  color: white;
}
</style>
