<template>
  <button :class="`button ${className}`">
    <router-link v-if="isRouter" :to="link">
      <a :class="classA" :aria-label="ariaLabel">{{ text }}</a>
    </router-link>
    <a :class="classA" v-else :href="link" :aria-label="ariaLabel">{{
      text
    }}</a>
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
    className: { type: String, required: false, default: "" },
    classA: { type: String, required: false, default: "" },
  },
};
</script>

<style lang="scss">
.not-clickable {
  pointer-events: none;
  opacity: 0.1;
}
</style>
